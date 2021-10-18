import { FC, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Rating, Breadcrumbs, Link, Button } from '@mui/material'
import NextLink from 'next/link'
import { useRecoilValue } from 'recoil'

import { runQuery } from 'client'
import { optionsAtom, CartEntryOption } from 'store'
import { ProductsDocument, ProductsQuery, ProductQuery, ProductDocument } from 'generated'
import { Row } from 'components/container'
import Layout from 'components/layout'
import SlideShow from 'components/slide-show'
import { ProductImage as ProductImageBase, ProductImageProps } from 'features/products/components/QuickViewProduct'
import { OptionsSelect } from 'features/products/components/OptionSelect'
import Review from 'features/products/components/Review'
import { useShoppingCart } from 'hooks'
import { Routes } from 'constants/routes'
import { Snackbar } from 'components/snackbar'

const Product: FC<Props> = ({ product }) => {
  const [isAddConfirmationShown, setIsAddConfirmationShown] = useState(false)
  const selectedItemOptions = useRecoilValue(optionsAtom)
  const { id, title, images, reviews, options, price, description } = product
  const { addItemToCart } = useShoppingCart()
  const overallRating = calculateStarRating(reviews)

  const productOptions = selectedItemOptions[product.id] || {}
  const priceModifier = Object.values(productOptions).reduce(
    (total, current) => total + (current?.priceModifier || 0),
    0
  )
  const priceWithSelectedOptions = price + priceModifier

  const handleAddToCart = () => {
    const selectedOptions = Object.entries(selectedItemOptions?.[id]).reduce<CartEntryOption[]>(
      (total, [optionId, selectedOption]) => {
        // TODO: Eww - defaulting to option 1
        const targetOption =
          options?.find(({ id: allOptionId }) => allOptionId === optionId) || (options || [])[0] || {}
        if (!targetOption?.name) throw new Error('Cannot find targeted option')
        return [
          ...total,
          {
            ...selectedOption,
            priceModifier: selectedOption.priceModifier || 0,
            name: targetOption?.name,
          },
        ]
      },
      []
    )
    addItemToCart({
      id,
      title,
      price: priceWithSelectedOptions,
      options: selectedOptions,
      displayImage: product.displayImage,
    })
    setIsAddConfirmationShown(true)
  }

  return (
    <>
      <Layout noPadding title={title}>
        <Row>
          <SlideShow<ProductImageProps>
            slideInterval={Math.pow(9, 9)}
            chunkLimit={1}
            list={images}
            RenderComponent={ProductImage}
          />
          <Breadcrumbs sx={{ marginBottom: theme => theme.spacing(3) }} aria-label='breadcrumb'>
            <NextLink href={Routes.Home}>
              <Link underline='hover'>Home</Link>
            </NextLink>
            <NextLink href={Routes.Products}>
              <Link underline='hover'>Wallets</Link>
            </NextLink>
          </Breadcrumbs>
          <h1 style={{ margin: 0 }}>{title}</h1>
          <a href='#reviews'>
            <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
              <Rating value={overallRating} readOnly />
              <div style={{ padding: '3px 0 0 10px' }}>{reviews.length} Reviews</div>
            </div>
          </a>
          <div>
            <OptionsSelect options={options} />
          </div>
          <div>
            <Button
              onClick={handleAddToCart}
              sx={{
                marginTop: ({ spacing }) => spacing(3),
                color: ({ palette }) => palette.background.default,
                fontWeight: 700,
              }}
              fullWidth
              variant='contained'
            >
              Add to Cart ( ${priceWithSelectedOptions} ){' '}
            </Button>
          </div>
        </Row>
        <Row isOffColor title='Description'>
          {description}
        </Row>
        <Row title='Reviews' id='reviews'>
          {reviews.map(review => (
            <Review key={review.id} {...review} />
          ))}
        </Row>
      </Layout>
      <Snackbar
        isOpen={isAddConfirmationShown}
        setIsOpen={setIsAddConfirmationShown}
        severity='success'
        message='Added!'
        autoHideDuration={4000}
      />
    </>
  )
}

const calculateStarRating = (reviews: ProductQuery['product']['reviews']) => {
  const totalStars = reviews.reduce((total, { stars }) => total + stars, 0)
  return totalStars / reviews.length
}

const ProductImage: FC<ProductImageProps> = props => (
  <ProductImageBase style={{ margin: '0 10px' }} {...props} height='400px' />
)

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await runQuery<ProductsQuery>(ProductsDocument)()
  const paths = products.map(({ id }) => ({ params: { id } }))
  return {
    paths,
    fallback: false,
  }
}

type Props = ProductQuery
export const getStaticProps: GetStaticProps<Props> = async context => {
  const { id } = context.params || {}
  if (!id || typeof id !== 'string') throw new Error('Cannot find ID of product')
  const { product } = await runQuery<ProductQuery, { id: string }>(ProductDocument, { id })()
  return {
    props: {
      product,
    },
  }
}

export default Product

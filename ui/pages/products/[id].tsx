import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Rating, Breadcrumbs, Typography, Link, Button } from '@mui/material'
import NextLink from 'next/link'

import { runQuery } from 'client'
import { ProductsDocument, ProductsQuery, ProductQuery, ProductDocument } from 'generated'
import { Row } from 'components/container'
import Layout from 'components/layout'
import SlideShow from 'components/slide-show'
import { ProductImage as ProductImageBase, ProductImageProps } from 'features/products/components/QuickViewProduct'
import { OptionsSelect } from 'features/products/components/OptionSelect'

const Product: FC<Props> = ({ product: { title, images, reviews, options, price } }) => {
  const overallRating = calculateStarRating(reviews)
  return (
    <Layout noPadding title={title}>
      <Row>
        <SlideShow<ProductImageProps>
          slideInterval={Math.pow(9, 9)}
          chunkLimit={1}
          list={images}
          RenderComponent={ProductImage}
        />
        <Breadcrumbs sx={{ marginBottom: theme => theme.spacing(3) }} aria-label='breadcrumb'>
          <NextLink href='/'>
            <Link underline='hover'>Home</Link>
          </NextLink>
          <NextLink href='/wallets'>
            <Link underline='hover'>Wallets</Link>
          </NextLink>
          <Typography color='text.primary'>{title}</Typography>
        </Breadcrumbs>
        <h1 style={{ margin: 0 }}>{title}</h1>
        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
          <Rating value={overallRating} readOnly />
          <div style={{ padding: '3px 0 0 10px' }}>{reviews.length} Reviews</div>
        </div>
        <div>
          <OptionsSelect options={options} />
        </div>
        <div>
          <Button fullWidth variant='contained'>
            Add to Cart ( ${price} ){' '}
          </Button>
        </div>
      </Row>
    </Layout>
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
  if (!id) throw new Error('Cannot find ID of product')
  const { product } = await runQuery<ProductQuery, { id: string }>(ProductDocument, { id })()
  return {
    props: {
      product,
    },
  }
}

export default Product

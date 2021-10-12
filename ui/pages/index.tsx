import { FC } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { Grid } from '@mui/material'

import Layout from 'components/layout'
// import { Routes } from 'constants/routes'
import { Row } from 'components/container'
import { runQuery } from 'client'
import { ProductsQuery, ProductsDocument } from 'generated'
import { QuickViewProduct } from 'features/products'

const Hero = dynamic(() => import('features/landing/hero'))

const Landing: FC<Props> = ({ products }) => {
  return (
    <Layout noPadding>
      <Hero />
      <Row title='Featured Products'>
        <Grid container spacing={1}>
          {products.map(product => (
            <QuickViewProduct {...product} key={product.id} />
          ))}
          {products.map(product => (
            <QuickViewProduct {...product} key={product.id} />
          ))}
        </Grid>
      </Row>
    </Layout>
  )
}

type Props = ProductsQuery
export const getStaticProps: GetStaticProps<ProductsQuery> = async () => {
  const { products } = await runQuery<ProductsQuery>(ProductsDocument)()
  return {
    props: {
      products,
    },
  }
}

export default Landing

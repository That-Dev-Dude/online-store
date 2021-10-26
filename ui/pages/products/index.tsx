import { FC } from 'react'
import { GetStaticProps } from 'next'
import { Grid } from '@mui/material'

import Layout from 'components/layout'
import { Row } from 'components/container'
import { runQuery } from 'client'
import { ProductsQuery, ProductsDocument } from 'generated'
import { QuickViewProduct } from 'features/products'

const Products: FC<Props> = ({ products }) => {
  return (
    <Layout noPadding title='Products'>
      <Row title='Products'>
        <Grid container spacing={1}>
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

export default Products

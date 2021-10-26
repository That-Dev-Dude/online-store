import { FC } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { Grid } from '@mui/material'

import Layout from 'components/layout'
import { Row } from 'components/container'
import { runQuery } from 'client'
import { FeaturedProductsQuery, FeaturedProductsDocument } from 'generated'
import { QuickViewProduct } from 'features/products'

const Hero = dynamic(() => import('features/landing/hero'))

const Landing: FC<Props> = ({ featuredProducts }) => {
  return (
    <Layout noPadding>
      <Hero />
      <Row title='Featured Products'>
        <Grid container spacing={1}>
          {featuredProducts.map(product => (
            <QuickViewProduct {...product} key={product.id} />
          ))}
        </Grid>
      </Row>
    </Layout>
  )
}

type Props = FeaturedProductsQuery
export const getStaticProps: GetStaticProps<FeaturedProductsQuery> = async () => {
  const { featuredProducts } = await runQuery<FeaturedProductsQuery>(FeaturedProductsDocument)()
  return {
    props: {
      featuredProducts,
    },
  }
}

export default Landing

import { FC } from 'react'
import dynamic from 'next/dynamic'

import Layout from 'components/layout'
// import { Routes } from 'constants/routes'
import { Row } from 'components/container'
import { useProductsQuery } from 'generated'
import { QuickViewProduct } from 'features/products'

const Hero = dynamic(() => import('features/landing/hero'))

const Landing: FC = () => {
  const { data } = useProductsQuery()
  const products = data?.products || []
  return (
    <Layout noPadding>
      <Hero />
      <Row title='Featured Products'>
        <QuickViewProduct {...products[0]} />
      </Row>
    </Layout>
  )
}

export default Landing

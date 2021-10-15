import { FC } from 'react'
import { Grid } from '@mui/material'

import Layout from 'components/layout'
import { Row } from 'components/container'

const Checkout: FC = () => {
  return (
    <Layout noPadding title='Checkout'>
      <Row title='Checkout'>
        <Grid container spacing={1}></Grid>
      </Row>
    </Layout>
  )
}

export default Checkout

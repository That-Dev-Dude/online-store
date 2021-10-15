import { FC } from 'react'
import { Grid } from '@mui/material'

import Layout from 'components/layout'
import { Row } from 'components/container'
import { CartItem } from 'features/cart'
import { useShoppingCart } from 'hooks'

const Cart: FC = () => {
  const { cart } = useShoppingCart()
  return (
    <Layout noPadding title='Cart'>
      <Row title='Cart'>
        <Grid container spacing={1}>
          {cart.map(cartItem => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </Grid>
      </Row>
    </Layout>
  )
}

export default Cart

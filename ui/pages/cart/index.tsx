import { FC } from 'react'
import { Button, Grid } from '@mui/material'
import Link from 'next/link'

import Layout from 'components/layout'
import { Row } from 'components/container'
import { CartItem, PaymentOptions } from 'features/cart'
import { useShoppingCart } from 'hooks'
import { Routes } from 'constants/routes'

const Cart: FC = () => {
  const { cart, subTotal } = useShoppingCart()
  return (
    <Layout noPadding title='Cart'>
      <Row title='Cart'>
        <Grid container spacing={1}>
          {cart.map(cartItem => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
          <EmptyCartDisplay isEmpty={!cart.length} />
        </Grid>
      </Row>
      <Summary isEmpty={!cart.length} subTotal={subTotal} />
    </Layout>
  )
}

interface EmptyCartDisplayProps {
  isEmpty: boolean
}
const EmptyCartDisplay: FC<EmptyCartDisplayProps> = ({ isEmpty }) => {
  if (!isEmpty) return null
  return (
    <div>
      <p>Such Empty!</p>
      <Link passHref href={Routes.Home}>
        <Button variant='outlined'>Shop</Button>
      </Link>
    </div>
  )
}

interface SummaryProps extends EmptyCartDisplayProps {
  subTotal: number
}
const Summary: FC<SummaryProps> = ({ isEmpty, subTotal }) => {
  if (isEmpty) return null
  return (
    <Row isOffColor>
      <Grid container justifyContent='space-between'>
        <Grid item xs={3}>
          Subtotal
        </Grid>
        <Grid item xs={2}>
          ${subTotal}
        </Grid>
      </Grid>
      <p style={{ textAlign: 'center' }}>Free shipping and returns within the U.S.</p>
      <Button sx={{ color: 'black', fontWeight: 'bolder' }} fullWidth variant='contained'>
        Checkout
      </Button>
      <p style={{ textAlign: 'center' }}>Or checkout with</p>
      <PaymentOptions />
    </Row>
  )
}

export default Cart

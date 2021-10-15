import { FC } from 'react'
import { styled } from '@mui/material'

import { CartEntry } from 'store'
import { useShoppingCart } from 'hooks'

export const CartItem: FC<CartEntry> = ({ id, product, quantity }) => {
  const { mutateCount } = useShoppingCart()
  return <Container></Container>
}

const Container = styled('div')`
  padding: 0 10px;
`

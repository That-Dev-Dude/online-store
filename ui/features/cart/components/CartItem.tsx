import { FC } from 'react'
import { IconButton, styled, Grid, Button } from '@mui/material'
import { Close } from '@mui/icons-material'

import { CartEntry } from 'store'
import { useShoppingCart } from 'hooks'
import { ProductImage } from 'features/products/components/QuickViewProduct'

export const CartItem: FC<CartEntry> = ({ id, product }) => {
  const { mutateCount, removeItemFromCart } = useShoppingCart()
  // Joins options with commas, except the last one.
  const optionsAsCommaSepString = product.options.reduce(
    (total, { option }, index) => total + option + (index === product.options.length - 1 ? '' : ', '),
    ''
  )
  return (
    <Container container spacing={3}>
      <Grid item xs={3}>
        <ProductImage url={product.displayImage.url} height='90px' width='90px' />
      </Grid>
      <Grid item xs={7}>
        <div>{product.title}</div>
        <Options>{optionsAsCommaSepString}</Options>
        <div>
          <BrandColoredText>${product.price}</BrandColoredText>
        </div>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => removeItemFromCart(id)}>
          <Close color='error' />
        </IconButton>
      </Grid>
    </Container>
  )
}

const Options = styled('p')`
  margin: 0;
  font-size: 0.7em;
`

const BrandColoredText = styled('span')`
  color: ${({ theme: { palette } }) => palette.primary.main};
`

const Container = styled(Grid)`
  padding: 0 10px;
`

import { FC } from 'react'
import { styled, Card, CardContent, CardHeader, Grid } from '@mui/material'
import shouldForwardProp from '@emotion/is-prop-valid'

import { ProductsQuery } from 'generated/index'

export const QuickViewProduct: FC<ArrayElement<ProductsQuery['products']>> = ({ displayImage, title, price }) => {
  return (
    <Grid item xs={6} md={3}>
      <Card>
        <Title>{title}</Title>
        <Subtitle>{`From $${price} USD`}</Subtitle>
        <ProductImage url={displayImage.url} />
      </Card>
    </Grid>
  )
}

export interface ProductImageProps {
  url: string
  height?: string
  width?: string
}
export const ProductImage = styled('div', { shouldForwardProp })<ProductImageProps>`
  background-image: url(${({ url }) => require('assets/images' + url)});
  background-size: cover;
  height: ${({ height = '200px' }) => height};
  width: ${({ width = '100%;' }) => width};
  background-position: center;
`

const Title = styled('h2')`
  font-size: 1em;
  padding-left: ${({ theme }) => theme.spacing(1)};
  margin: 10px 0 0 0;
`
const Subtitle = styled('h3')`
  margin: 0 0 10px 0;
  font-size: 0.8em;
  padding-left: ${({ theme }) => theme.spacing(1)};
`

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never

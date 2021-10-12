import { FC } from 'react'
import { Card, CardContent, CardHeader } from '@mui/material'

import { ProductsQuery } from 'generated/index'

export const QuickViewProduct: FC<ArrayElement<ProductsQuery['products']>> = ({ displayImage, title, price }) => {
  return (
    <Card>
      <CardHeader title={title} subheader={`From $${price} USD`} />
      <CardContent>
        <img src={displayImage.url} alt={displayImage.altText} />
      </CardContent>
    </Card>
  )
}

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never

import { FC } from 'react'
import { Card, CardContent, CardHeader } from '@mui/material'

import { Product as IProduct } from 'generated/index'

export const Product: FC<IProduct> = ({ displayImage, title, price }) => {
  return (
    <Card>
      <CardHeader title={title} subheader={`From $${price} USD`} />
      <CardContent>
        <img src={displayImage.url} alt={displayImage.altText} />
      </CardContent>
    </Card>
  )
}

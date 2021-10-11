import { QueryProductArgs, Product } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'

import { products } from '../data/products'

export const product: Resolver<Product, QueryProductArgs> = async ({ id }) => {
  const foundProduct = products.find(({ id: productId }) => id === productId)
  if (!foundProduct) throw new Error('Cannot find product')
  return foundProduct
}

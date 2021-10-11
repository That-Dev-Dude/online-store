import { Product } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'

import { products as allProducts } from '../data/products'

export const products: Resolver<Product[]> = async () => {
  return allProducts
}

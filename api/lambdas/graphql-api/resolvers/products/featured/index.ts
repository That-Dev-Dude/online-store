import { Product } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'

import { products as allProducts } from '../data/products'

export const featuredProducts: Resolver<Product[]> = async () => {
  return [allProducts[0], allProducts[3]]
}

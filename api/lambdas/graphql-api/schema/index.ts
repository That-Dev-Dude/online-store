import { buildSchema } from 'graphql'
import { DateTypeDefinition } from 'graphql-scalars'

import { stitchSchema } from '@/graphql-api/util'

import { MutationResultSchema } from './shared'
import { ReviewSchema, ReviewQueries } from './review'
import { ProductSchema, ProductQueries } from './product'

const schemas = stitchSchema(MutationResultSchema, ProductSchema, ReviewSchema, DateTypeDefinition)
const queries = `#graphql
  type Query {
    ${stitchSchema(ReviewQueries, ProductQueries)}
  }
`

export const schema = buildSchema(stitchSchema(schemas, queries))

export * from '../resolvers'

import * as productResolvers from './products'
import * as reviewResolvers from './reviews'
import { DateScalar } from './date'

export const resolvers = {
  ...productResolvers,
  ...reviewResolvers,
  Date: DateScalar,
}

import { QueryReviewsArgs, Review } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'

import { reviews as allReviews } from '../reviews'

export const reviews: Resolver<Review[], QueryReviewsArgs> = async ({ productId }) => {
  const foundReviews = allReviews[productId]
  if (!foundReviews) throw new Error('Cannot find reviews')
  return foundReviews
}

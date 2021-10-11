export const ReviewSchema = `#graphql
  type Review {
    id: String!
    title: String!
    author: String!
    isVerified: Boolean
    date: Date!
    review: String!
    productId: String!
    stars: Int!
  }
`

export const ReviewQueries = `#graphql
reviews(productId: String!): [Review!]!
`

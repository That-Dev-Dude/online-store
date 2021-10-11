export const ProductSchema = `#graphql

  enum ProductOptionType {
    color
    radio
  }

  type ProductOption {
    id: String!
    option: String!
    description: String
  }

  type ProductOptionGroup {
    id: String!
    name: String!
    options: [ProductOption!]!
    productType: ProductOptionType!
  }

  type ProductImage {
    url: String!
    altText: String!
  }

  type Product {
    id: String!
    title: String!
    price: Int!
    shortDescription: String
    description: String!
    options: [ProductOptionGroup!]
    images: [ProductImage!]!
    displayImage: ProductImage!
    reviews: [Review!]!
  }
`

export const ProductQueries = `#graphql
product(id: String!): Product!
# TODO: Add filters
products: [Product!]!
`

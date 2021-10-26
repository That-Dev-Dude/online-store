import { useQuery, UseQueryOptions } from 'react-query';
import { runQuery } from 'client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type MutationResult = {
  status: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type Product = {
  id: Scalars['String'];
  title: Scalars['String'];
  price: Scalars['Int'];
  shortDescription?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  options?: Maybe<Array<ProductOptionGroup>>;
  images: Array<ProductImage>;
  displayImage: ProductImage;
  reviews: Array<Review>;
};

export type ProductImage = {
  url: Scalars['String'];
  altText: Scalars['String'];
};

export type ProductOption = {
  id: Scalars['String'];
  option: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  priceModifier?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroup = {
  id: Scalars['String'];
  name: Scalars['String'];
  options: Array<ProductOption>;
  productType: ProductOptionType;
};

export enum ProductOptionType {
  Color = 'color',
  Radio = 'radio'
}

export type Query = {
  reviews: Array<Review>;
  product: Product;
  products: Array<Product>;
  featuredProducts: Array<Product>;
};


export type QueryReviewsArgs = {
  productId: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};

export type Review = {
  id: Scalars['String'];
  title: Scalars['String'];
  author: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  date: Scalars['Date'];
  review: Scalars['String'];
  productId: Scalars['String'];
  stars: Scalars['Int'];
};

export type FeaturedProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedProductsQuery = { featuredProducts: Array<(
    Pick<Product, 'id' | 'title' | 'price' | 'shortDescription'>
    & { displayImage: Pick<ProductImage, 'url' | 'altText'> }
  )> };

export type ProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductQuery = { product: (
    Pick<Product, 'id' | 'title' | 'price' | 'shortDescription' | 'description'>
    & { options?: Maybe<Array<(
      Pick<ProductOptionGroup, 'id' | 'name' | 'productType'>
      & { options: Array<Pick<ProductOption, 'id' | 'option' | 'description' | 'priceModifier'>> }
    )>>, images: Array<Pick<ProductImage, 'url' | 'altText'>>, displayImage: Pick<ProductImage, 'url' | 'altText'>, reviews: Array<Pick<Review, 'id' | 'title' | 'author' | 'isVerified' | 'date' | 'review' | 'productId' | 'stars'>> }
  ) };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { products: Array<(
    Pick<Product, 'id' | 'title' | 'price' | 'shortDescription'>
    & { displayImage: Pick<ProductImage, 'url' | 'altText'> }
  )> };


export const FeaturedProductsDocument = `
    query FeaturedProducts {
  featuredProducts {
    id
    title
    price
    shortDescription
    displayImage {
      url
      altText
    }
  }
}
    `;
export const useFeaturedProductsQuery = <
      TData = FeaturedProductsQuery,
      TError = unknown
    >(
      variables?: FeaturedProductsQueryVariables, 
      options?: UseQueryOptions<FeaturedProductsQuery, TError, TData>
    ) => 
    useQuery<FeaturedProductsQuery, TError, TData>(
      ['FeaturedProducts', variables],
      runQuery<FeaturedProductsQuery, FeaturedProductsQueryVariables>(FeaturedProductsDocument, variables),
      options
    );
useFeaturedProductsQuery.getKey = (variables?: FeaturedProductsQueryVariables) => ['FeaturedProducts', variables];

export const ProductDocument = `
    query Product($id: String!) {
  product(id: $id) {
    id
    title
    price
    shortDescription
    description
    options {
      id
      name
      options {
        id
        option
        description
        priceModifier
      }
      productType
    }
    images {
      url
      altText
    }
    displayImage {
      url
      altText
    }
    reviews {
      id
      title
      author
      isVerified
      date
      review
      productId
      stars
    }
  }
}
    `;
export const useProductQuery = <
      TData = ProductQuery,
      TError = unknown
    >(
      variables: ProductQueryVariables, 
      options?: UseQueryOptions<ProductQuery, TError, TData>
    ) => 
    useQuery<ProductQuery, TError, TData>(
      ['Product', variables],
      runQuery<ProductQuery, ProductQueryVariables>(ProductDocument, variables),
      options
    );
useProductQuery.getKey = (variables: ProductQueryVariables) => ['Product', variables];

export const ProductsDocument = `
    query Products {
  products {
    id
    title
    price
    shortDescription
    displayImage {
      url
      altText
    }
  }
}
    `;
export const useProductsQuery = <
      TData = ProductsQuery,
      TError = unknown
    >(
      variables?: ProductsQueryVariables, 
      options?: UseQueryOptions<ProductsQuery, TError, TData>
    ) => 
    useQuery<ProductsQuery, TError, TData>(
      ['Products', variables],
      runQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables),
      options
    );
useProductsQuery.getKey = (variables?: ProductsQueryVariables) => ['Products', variables];

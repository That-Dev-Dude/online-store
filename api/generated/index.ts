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
  __typename?: 'MutationResult';
  status: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
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
  __typename?: 'ProductImage';
  url: Scalars['String'];
  altText: Scalars['String'];
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id: Scalars['String'];
  option: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  priceModifier?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroup = {
  __typename?: 'ProductOptionGroup';
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
  __typename?: 'Query';
  reviews: Array<Review>;
  product: Product;
  products: Array<Product>;
};


export type QueryReviewsArgs = {
  productId: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['String'];
  title: Scalars['String'];
  author: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  date: Scalars['Date'];
  review: Scalars['String'];
  productId: Scalars['String'];
  stars: Scalars['Int'];
};

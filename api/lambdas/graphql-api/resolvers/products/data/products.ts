import { Product, ProductOptionType } from '@generated/index'
import { passportIdWallet } from './productIds'
import { passportWalletReviews } from '../../reviews/reviews'

export const products: Product[] = [
  {
    id: passportIdWallet,
    title: 'Passport Wallet',
    price: 160,
    shortDescription:
      'The Passport Wallet conveniently stores all your necessary travel cards and documents in one place.',
    description: `The Passport Wallet conveniently stores all your necessary travel cards and documents in one place. This minimalist construction fits all passport sizes and offers space for boarding passes, customs forms, visas, or any other travel documents, and the patented push slots reduce bulk by removing the need for multiple pockets. By fanning the cards out, you can identify and remove the one you need while leaving the others in place. 

    Crafted from luxurious French calfskin and finished with burnished edges and hand tacks, this wallet will stand the test of time and only grow in beauty. The Sport Leather version is carefully designed to withstand the increased wear-and-tear that comes from an active lifestyle. The patented coating on the exterior of the Italian leather is water and stain resistant and will retain its vibrant color over time.`,
    options: [
      {
        id: 'material',
        name: 'Material',
        options: [
          {
            id: 'french-calfskin',
            option: 'French Calfskin',
          },
          {
            id: 'sport-leather',
            option: 'Sport Leather',
          },
        ],
        productType: ProductOptionType.Radio,
      },
      {
        id: 'color',
        name: 'Color',
        options: [
          {
            id: 'black',
            option: 'black',
            description: 'Black',
          },
          {
            id: 'brown',
            option: 'brown',
            description: 'Cognac',
          },
          {
            id: 'blue',
            option: 'blue',
            description: 'Cobalt',
          },
          {
            id: 'orange',
            option: 'orange',
            description: 'FSHD Orange',
          },
          {
            id: 'red',
            option: 'red',
            description: 'Red',
          },
        ],
        productType: ProductOptionType.Color,
      },
      {
        id: 'rfid',
        name: 'RFID',
        options: [
          {
            id: 'non-rfid',
            option: 'Non-RFID',
          },
          {
            id: 'rfid',
            option: 'RFID',
          },
        ],
        productType: ProductOptionType.Radio,
      },
    ],
    displayImage: {
      url: `/products/${passportIdWallet}/thumbnail.jpg`,
      altText: 'front',
    },
    images: [
      {
        url: `/products/${passportIdWallet}/black/1.jpeg`,
        altText: 'front',
      },
      {
        url: `/products/${passportIdWallet}/black/2.jpeg`,
        altText: 'side',
      },
      {
        url: `/products/${passportIdWallet}/black/3.jpeg`,
        altText: 'other side',
      },
      {
        url: `/products/${passportIdWallet}/black/4.jpeg`,
        altText: 'back',
      },
      {
        url: `/products/${passportIdWallet}/black/5.jpeg`,
        altText: 'open',
      },
      {
        url: `/products/${passportIdWallet}/black/6.jpeg`,
        altText: 'standing',
      },
      {
        url: `/products/${passportIdWallet}/shared/1.jpeg`,
        altText: 'holding brown wallet',
      },
      {
        url: `/products/${passportIdWallet}/shared/2.jpeg`,
        altText: 'brown wallet in jacket',
      },
      {
        url: `/products/${passportIdWallet}/shared/3.jpeg`,
        altText: 'taking card out of brown wallet',
      },
      {
        url: `/products/${passportIdWallet}/shared/4.jpeg`,
        altText: 'taking money out of brown wallet',
      },
    ],
    reviews: passportWalletReviews,
  },
]

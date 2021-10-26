import { Product, ProductOptionType } from '@generated/index'
import { billfoldWallet, passportIdWallet, slimBriefId, fifteenLaptopBrief } from './productIds'
import {
  billfoldWalletReviews,
  fifteenLaptopBriefReviews,
  passportWalletReviews,
  slimBriefReviews,
} from '../../reviews/reviews'

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
            priceModifier: -40,
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
            option: 'rgb(67,65,68)',
            description: 'Black',
            priceModifier: 0,
          },
          {
            id: 'cognac',
            option: '#A17056',
            description: 'Cognac',
            priceModifier: 0,
          },
          {
            id: 'cobalt',
            option: 'rgb(65,86,124)',
            description: 'Cobalt',
            priceModifier: 0,
          },
          {
            id: 'orange',
            option: 'rgb(211,126,70)',
            description: 'FSHD Orange',
            priceModifier: 0,
          },
          {
            id: 'red',
            option: 'rgb(170,66,61)',
            description: 'Red',
            priceModifier: 0,
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
            priceModifier: 0,
          },
          {
            id: 'rfid',
            option: 'RFID',
            priceModifier: 15,
          },
        ],
        productType: ProductOptionType.Radio,
      },
    ],
    displayImage: {
      url: `/${passportIdWallet}/thumbnail.jpg`,
      altText: 'front',
    },
    images: [
      {
        url: `/${passportIdWallet}/1.jpeg`,
        altText: 'front',
      },
      {
        url: `/${passportIdWallet}/2.jpeg`,
        altText: 'side',
      },
      {
        url: `/${passportIdWallet}/3.jpeg`,
        altText: 'other side',
      },
      {
        url: `/${passportIdWallet}/4.jpeg`,
        altText: 'back',
      },
      {
        url: `/${passportIdWallet}/5.jpeg`,
        altText: 'open',
      },
      {
        url: `/${passportIdWallet}/6.jpeg`,
        altText: 'standing',
      },
      {
        url: `/${passportIdWallet}/7.jpeg`,
        altText: 'holding brown wallet',
      },
      {
        url: `/${passportIdWallet}/8.jpeg`,
        altText: 'brown wallet in jacket',
      },
      {
        url: `/${passportIdWallet}/9.jpeg`,
        altText: 'taking card out of brown wallet',
      },
      {
        url: `/${passportIdWallet}/10.jpeg`,
        altText: 'taking money out of brown wallet',
      },
    ],
    reviews: passportWalletReviews,
  },
  {
    id: billfoldWallet,
    title: 'Billfold Wallet',
    price: 145,
    shortDescription: 'The Billfold Wallet features ample room for cards, currency, receipts and business cards.',
    description: `The Billfold Wallet features ample room for cards, currency, receipts and business cards, helping you stay organized on the go. Our minimalist design and patented push slots reduce bulk by removing the need for multiple pockets. These cutouts make it easier than ever to access various cards on the fly. By fanning the cards out, you can identify and remove the one you need while leaving the others in place. 

    Crafted from luxurious French calfskin and finished with burnished edges and hand tacks, this wallet will stand the test of time and only grow in beauty.`,
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
            priceModifier: -40,
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
            option: 'rgb(67,65,68)',
            description: 'Black',
            priceModifier: 0,
          },
          {
            id: 'cognac',
            option: '#A17056',
            description: 'Cognac',
            priceModifier: 0,
          },
          {
            id: 'cobalt',
            option: 'rgb(65,86,124)',
            description: 'Cobalt',
            priceModifier: 0,
          },
          {
            id: 'orange',
            option: 'rgb(211,126,70)',
            description: 'FSHD Orange',
            priceModifier: 0,
          },
          {
            id: 'red',
            option: 'rgb(170,66,61)',
            description: 'Red',
            priceModifier: 0,
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
            priceModifier: 0,
          },
          {
            id: 'rfid',
            option: 'RFID',
            priceModifier: 15,
          },
        ],
        productType: ProductOptionType.Radio,
      },
    ],
    displayImage: {
      url: `/${billfoldWallet}/thumbnail.jpg`,
      altText: 'front',
    },
    images: [
      {
        url: `/${billfoldWallet}/1.jpeg`,
        altText: 'front',
      },
      {
        url: `/${billfoldWallet}/2.jpeg`,
        altText: 'side',
      },
      {
        url: `/${billfoldWallet}/3.jpeg`,
        altText: 'other side',
      },
      {
        url: `/${billfoldWallet}/4.jpeg`,
        altText: 'back',
      },
      {
        url: `/${billfoldWallet}/5.jpeg`,
        altText: 'open',
      },
      {
        url: `/${billfoldWallet}/6.jpeg`,
        altText: 'standing',
      },
      {
        url: `/${billfoldWallet}/7.jpeg`,
        altText: 'holding brown wallet',
      },
    ],
    reviews: billfoldWalletReviews,
  },
  {
    id: slimBriefId,
    title: 'Slim Brief',
    price: 950,
    shortDescription:
      'As the thinnest and lightest-weight bag featuring the System, you will be able to utilize every square inch to carry your essentials.',
    description: `To the efficient minimalists out there, this is your bag. As the thinnest and lightest-weight bag featuring the System, you will be able to utilize every square inch to carry your essentials. The patented Anson Calder System allows you to customize the inside of your bag to match exactly what you carry. No more loose cords or wobbly laptop; pick the Cases and Sleeves for your own devices and you'll be set. Read more about The System to learn how it all works together.`,
    options: [
      {
        id: 'material',
        name: 'Material',
        options: [
          {
            id: 'french-calfskin',
            option: 'French Calfskin',
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
            option: 'rgb(67,65,68)',
            description: 'Black',
            priceModifier: 0,
          },
          {
            id: 'cognac',
            option: '#A17056',
            description: 'Cognac',
            priceModifier: 0,
          },
          {
            id: 'cobalt',
            option: 'rgb(65,86,124)',
            description: 'Cobalt',
            priceModifier: 0,
          },
        ],
        productType: ProductOptionType.Color,
      },
    ],
    displayImage: {
      url: `/${slimBriefId}/thumbnail.jpg`,
      altText: 'front',
    },
    images: [
      {
        url: `/${slimBriefId}/1.jpeg`,
        altText: 'front',
      },
      {
        url: `/${slimBriefId}/2.jpeg`,
        altText: 'side',
      },
      {
        url: `/${slimBriefId}/3.jpeg`,
        altText: 'other side',
      },
      {
        url: `/${slimBriefId}/4.jpeg`,
        altText: 'back',
      },
      {
        url: `/${slimBriefId}/5.gif`,
        altText: 'open',
      },
    ],
    reviews: slimBriefReviews,
  },
  {
    id: fifteenLaptopBrief,
    title: '15" Laptop Brief',
    price: 1150,
    shortDescription:
      'As the thinnest and lightest-weight bag featuring the System, you will be able to utilize every square inch to carry your essentials.',
    description: `To the efficient minimalists out there, this is your bag. As the thinnest and lightest-weight bag featuring the System, you will be able to utilize every square inch to carry your essentials. The patented Anson Calder System allows you to customize the inside of your bag to match exactly what you carry. No more loose cords or wobbly laptop; pick the Cases and Sleeves for your own devices and you'll be set. Read more about The System to learn how it all works together.`,
    options: [
      {
        id: 'material',
        name: 'Material',
        options: [
          {
            id: 'french-calfskin',
            option: 'French Calfskin',
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
            option: 'rgb(67,65,68)',
            description: 'Black',
            priceModifier: 0,
          },
          {
            id: 'cognac',
            option: '#A17056',
            description: 'Cognac',
            priceModifier: 0,
          },
          {
            id: 'cobalt',
            option: 'rgb(65,86,124)',
            description: 'Cobalt',
            priceModifier: 0,
          },
        ],
        productType: ProductOptionType.Color,
      },
    ],
    displayImage: {
      url: `/${fifteenLaptopBrief}/thumbnail.jpeg`,
      altText: 'front',
    },
    images: [
      {
        url: `/${fifteenLaptopBrief}/1.jpeg`,
        altText: 'front',
      },
      {
        url: `/${fifteenLaptopBrief}/2.jpeg`,
        altText: 'side',
      },
      {
        url: `/${fifteenLaptopBrief}/3.jpeg`,
        altText: 'other side',
      },
      {
        url: `/${fifteenLaptopBrief}/4.jpeg`,
        altText: 'back',
      },
      {
        url: `/${fifteenLaptopBrief}/5.jpeg`,
        altText: 'open',
      },
    ],
    reviews: fifteenLaptopBriefReviews,
  },
]

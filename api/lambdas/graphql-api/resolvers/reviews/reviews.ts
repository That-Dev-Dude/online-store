import { Review } from '@generated/index'
import { passportIdWallet } from '../products/data/productIds'

export const passportWalletReviews: Review[] = [
  {
    id: '11eeac22-5211-4ac5-bbc6-0859b3803b22',
    productId: passportIdWallet,
    date: new Date('05/07/2021').toString(),
    title: 'Best passport wallet',
    review: "High-quality and feels great in my hand. Makes the experience a little 'extra' when traveling :)",
    stars: 5,
    author: 'Lucas P.',
    isVerified: true,
  },
  {
    id: 'c694d2fb-a36f-40f3-ac8a-028e421ecd2f',
    productId: passportIdWallet,
    date: new Date('09/24/2020').toString(),
    title: 'Passport wallet',
    review:
      'This is a great passport wallet that is composed of high quality material. The size is good and features ample holding space. The design is a great look.',
    stars: 5,
    author: 'Keith S.',
    isVerified: true,
  },
  {
    id: 'a28f767f-fd1d-4c3e-88ca-d2631ee4dff4',
    productId: passportIdWallet,
    date: new Date('08/15/2020').toString(),
    title: "It's a perfect size",
    review: 'It’s a perfect size, and it fit all my travel documents, and the material is excellent',
    stars: 5,
    author: 'Erik A.',
    isVerified: false,
  },
  {
    id: 'c0afa077-f7f2-4ff2-b0cb-218124a3dc9f',
    productId: passportIdWallet,
    date: new Date('08/12/2020').toString(),
    title: 'Passport Holder',
    review:
      'Perfect size for the passport, credit cards, money. Great quality leather, stylish. An accessory that will last forever.',
    stars: 5,
    author: 'Scott B.',
    isVerified: true,
  },
  {
    id: '00b12001-2e8d-4b43-b991-82a382b69e96',
    productId: passportIdWallet,
    date: new Date('07/01/2020').toString(),
    title: 'Perfect Fathers Day Gift',
    review:
      "Got this as a Father's Day present for my dad and it was perfect. I never know what to get my dad for Father's Day but this was perfect! Dad loved the monogram and ran upstairs to grab his passport. Smooth to the touch and the material feels great in your hand.",
    stars: 5,
    author: 'Eric C.',
    isVerified: true,
  },
]

export const reviews: Record<string, Review[]> = {
  [passportIdWallet]: passportWalletReviews,
}

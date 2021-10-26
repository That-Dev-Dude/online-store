import { Review } from '@generated/index'
import { passportIdWallet, billfoldWallet, slimBriefId, fifteenLaptopBrief } from '../products/data/productIds'

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

export const billfoldWalletReviews: Review[] = [
  {
    id: '11eeac22-5211-4ac5-bec6-0859b3803b22',
    productId: billfoldWallet,
    date: new Date('09/27/2020').toString(),
    title: 'High Quality, Functional Minimalist Billfold',
    review:
      'I purchased the brown variant of this billfold about a year ago. The wallet is holding up great and developing a nice patina around the edges. Would (and probably will) buy again.',
    stars: 5,
    author: 'Jake P.',
    isVerified: true,
  },
]

export const slimBriefReviews: Review[] = [
  {
    id: '11eeac22-5211-4ac5-bec6-0859b1803b22',
    productId: slimBriefId,
    date: new Date('08/31/2017').toString(),
    title: 'Sophisticated Professional Attache Case',
    review:
      'I loved the 15" Laptop Brief case so much, I returned for the Attache case. This bag is attractively small and yet I am amazed by how much it holds. The ability to reconfigure the accessories between the two bags makes unlimited possibilities. Quality and durable construction and material throughout!',
    stars: 5,
    author: 'Venita',
    isVerified: true,
  },
]

export const fifteenLaptopBriefReviews: Review[] = [
  {
    id: '11eeac22-5211-4ac5-bec6-0859b1809b22',
    productId: fifteenLaptopBrief,
    date: new Date('08/31/2017').toString(),
    title: 'Luxurious Custom Multi-Use Bag',
    review:
      'Finally I have found the perfect travel bag (and I have tried a lot in my years of traveling). Not only is this bag attractive and well-made, it is also extremely functional and well-planned. I love the hidden pockets on both sides which are perfect for my phone, boarding pass, business cards, etc. The customization system is brilliant.',
    stars: 5,
    author: 'Venita',
    isVerified: true,
  },
  {
    id: '4e8e237c-7380-4179-8054-8bef95e411b6',
    productId: fifteenLaptopBrief,
    date: new Date('08/28/2017').toString(),
    title: "Nicest Bag. Only bag I'll ever need.",
    review:
      'This bag feels like butter. It looks so professional and I feel like a million bucks whenever I go to a networking function or walk into a meeting. It helps me put my best foot forward and I feel like people take me more seriously because I took myself and my business seriously by investing in a lifetime bag. It is so nice.I love the feel.',
    stars: 5,
    author: 'Candice',
    isVerified: true,
  },
  {
    id: '0cfa53e5-f92b-44c3-81f9-be925bd7afc6',
    productId: fifteenLaptopBrief,
    date: new Date('05/31/2017').toString(),
    title: 'Smells like money.',
    review:
      'The craftsmanship of the bag is unparalleled. The attachment system is intuitive and appears to withstand many attachments and detachments. I really like the cognac color of this bag.',
    stars: 5,
    author: 'Michael D.',
    isVerified: true,
  },
  {
    id: 'f4d3abca-eb7d-4043-86a2-8dd3cea83978',
    productId: fifteenLaptopBrief,
    date: new Date('01/08/2021').toString(),
    title: 'Versatile Bag in Luxurious High Quality Leather',
    review:
      'The more I use my bag the more I love it. I love the laptop sleeve I can use for both my computer and to keep documents safe and it still has plenty of room to throw my random things in the middle. Which right now consists of everything from the new contact lens boxes I got to my wireless keyboard and wireless mouse I take back and forth to the office.',
    stars: 5,
    author: 'Timothy',
    isVerified: true,
  },
]

export const reviews: Record<string, Review[]> = {
  [passportIdWallet]: passportWalletReviews,
  [billfoldWallet]: billfoldWalletReviews,
  [slimBriefId]: slimBriefReviews,
  [fifteenLaptopBrief]: fifteenLaptopBriefReviews,
}

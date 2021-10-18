import { atom } from 'recoil'

import { Product, ProductImage } from 'generated/index'
import { AtomKeys } from 'store/keys'

export interface CartEntryOption {
  id: string
  name: string
  option: string
  priceModifier: number
}
export interface CartEntry {
  id: string
  product: {
    id: Product['id']
    title: Product['title']
    price: Product['price']
    options: CartEntryOption[]
    displayImage: ProductImage
  }
  quantity: number
}
/** 1st key is product ID, 2nd key is option ID
 * @example { 'passport-wallet'.color: 'red' }
 */
type Cart = Record<string, CartEntry>

export const cartAtom = atom<Cart>({
  key: AtomKeys.cart,
  default: {},
})

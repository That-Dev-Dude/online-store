import { atom } from 'recoil'

import { ProductOption } from 'generated/index'
import { AtomKeys } from 'store/keys'

/** 1st key is product ID, 2nd key is option ID
 * @example { 'passport-wallet'.color: 'red' }
 */
type ProductOptionSelection = Record<string, Record<string, ProductOption>>

export const optionsAtom = atom<ProductOptionSelection>({
  key: AtomKeys.options,
  default: {},
})

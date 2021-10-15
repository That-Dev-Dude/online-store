import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import { optionsAtom, CartEntry } from 'store'
import { ProductQuery } from 'generated/index'

const FileName: FC = () => {
  return <div />
}

const useAddItemToCart = ({ displayImage, title, id, price }: ProductQuery['product']) => {
  const router = useRouter()
  const productId = router.query.id as string
  const [allProductOptions, setOptions] = useRecoilState(optionsAtom)
  const productOptions = allProductOptions[productId] || {}

  const options: CartEntry['product']['options'] = Object.entries(productOptions).map(([key, value]) => ({
    id: key,
    name: value.
  }))

  const cartEntry: CartEntry['product'] = {
    id,
    displayImage,
    title,
    price,
    options: [],
  }
}

export default FileName

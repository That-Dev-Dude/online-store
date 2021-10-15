import { ProductQuery } from 'generated'
import { useRecoilState } from 'recoil'
import { v4 as uuid } from 'uuid'
import { useWindow } from '@caldwell619/react-hooks'

import { cartAtom, CartEntry } from 'store/cart/atoms'
import { useEffect } from 'react'

const localStorageCartId = 'cart'
const taxRate = 0.047
export const useShoppingCart = () => {
  const { localWindow } = useWindow()
  const [cartAsMap, setCart] = useRecoilState(cartAtom)
  const cart = Object.values(cartAsMap)

  useEffect(() => {
    const prevCartString = localWindow.localStorage.getItem(localStorageCartId)
    if (!prevCartString) return
    try {
      const prevCart = JSON.parse(prevCartString)
      console.log('prevCart', prevCart)
      setCart(prevCart)
    } catch (e) {
      //
    }
  }, [setCart, localWindow.localStorage])

  useEffect(() => {
    localWindow.localStorage.setItem(localStorageCartId, JSON.stringify(cartAsMap))
  }, [cartAsMap, localWindow.localStorage])

  const removeItemFromCart = (cartItemId: string) => {
    setCart(currentCart => {
      const mutableCart = { ...currentCart }
      delete mutableCart[cartItemId]
      return mutableCart
    })
  }

  const addItemToCart = (item: CartEntry['product']) => {
    const cartItemId = uuid()
    setCart(currentCart => {
      return {
        ...currentCart,
        [cartItemId]: {
          quantity: 1,
          product: item,
          id: cartItemId,
        },
      }
    })
  }

  const clearCart = () => {
    setCart({})
  }

  const mutateCount = (cartItemId: string, isIncrementing?: boolean) => {
    setCart(currentCart => {
      const currentQuantity = currentCart[cartItemId]?.quantity
      return {
        ...currentCart,
        [cartItemId]: {
          ...currentCart[cartItemId],
          quantity: currentQuantity + (isIncrementing ? 1 : -1),
        },
      }
    })
  }

  const subTotal = cart.reduce((total, { product }) => {
    const { price = 0 } = product || {}
    return total + price
  }, 0)
  const total = subTotal * taxRate

  return {
    subTotal,
    total,
    addItemToCart,
    removeItemFromCart,
    cart,
    clearCart,
    mutateCount,
    cartCount: cart.length,
  }
}

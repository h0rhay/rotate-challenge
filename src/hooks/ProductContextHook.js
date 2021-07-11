import React, { createContext, useState } from 'react'

const defaultState = {
  productSize: '',
  setProductSize: () => {},
  cartItems: '',
  setCartItems: () => {},
  cartValue: '',
  setCartValue: () => {},
  cartOpen: '',
  setCartOpen: () => {}
}

const ProductContext = createContext(defaultState)

const ProductContextProvider = props => {
  const [productSize, setProductSize] = useState('small')
  const [cartItems, setCartItems] = useState(0)
  const [cartValue, setCartValue] = useState('')
  const [cartOpen, setCartOpen] = useState('')

  return (
    <ProductContext.Provider value={{
      productSize,
      setProductSize: setProductSize,
      cartItems,
      setCartItems: setCartItems,
      cartValue,
      setCartValue: setCartValue,
      cartOpen,
      setCartOpen: setCartOpen
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export { ProductContextProvider, ProductContext}

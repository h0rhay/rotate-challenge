import React, { createContext, useState } from 'react'

const defaultState = {
  productSize: '',
  setProductSize: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartOpen: '',
  setCartOpen: () => {}
}

const ProductContext = createContext(defaultState)

const ProductContextProvider = props => {
  const [productSize, setProductSize] = useState('')
  const [cartItems, setCartItems] = useState('')
  const [cartOpen, setCartOpen] = useState('')

  return (
    <ProductContext.Provider value={{
      productSize,
      setProductSize: setProductSize,
      cartItems,
      setCartItems: setCartItems,
      cartOpen,
      setCartOpen: setCartOpen
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export { ProductContextProvider, ProductContext}

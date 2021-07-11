import React, { createContext, useState } from 'react'

const defaultState = {
  productSize: '',
  setProductSize: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartOpen: '',
  setCartOpen: () => {}
}

const GlobalContext = createContext(defaultState)

const GlobalContextProvider = props => {
  const [productSize, setProductSize] = useState('')
  const [cartItems, setCartItems] = useState('')
  const [cartOpen, setCartOpen] = useState('')

  return (
    <GlobalContext.Provider value={{
      productSize,
      setProductSize: setProductSize,
      cartItems,
      setCartItems: setCartItems,
      cartOpen,
      setCartOpen: setCartOpen
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContextProvider, GlobalContext}

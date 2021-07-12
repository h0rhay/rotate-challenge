import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../hooks/ProductContextHook'

const Cart = () => {
  const { cartItems } = useContext(ProductContext)
  const { cartValue } = useContext(ProductContext)
  const { cartOpen } = useContext(ProductContext)
  useEffect(() => {
    cartOpen && document.body.classList.add('cart-open')
    !cartOpen && document.body.classList.remove('cart-open')
  }, [cartOpen])
  return (
    <section className={`cart-wrap site-constrainer ${cartOpen ? `cart-open` : ``}`}>
      <div />
      <div />
      <div className='cart'>
        <div className="cart-inner">
          <h4>You have {cartItems} Items in your cart</h4>
          <h4>Subtotal: £{cartValue}.00</h4>
          <button>Checkout</button>
        </div>
      </div>
    </section>
  )
}

export default Cart

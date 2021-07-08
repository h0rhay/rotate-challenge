import React from 'react'
import Aesop from '../images/aesop-logo.svg'
const Product = ({ children }) => {
  return (
    <article className='product-wrap'>
      <Aesop className='aesop-logo-main' />
      { children }
    </article>
  )
}

export default Product
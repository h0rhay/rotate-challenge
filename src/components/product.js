import React from 'react'
import Aesop from '../images/aesop-logo.svg'
import ProductImage from './ProductImage'
import ProductDetails from './ProductDetails';

const Product = () => {
  return (
    <div className='product-layout'>
      <Aesop className='aesop-logo-main' />
      <div></div>
      <div><ProductImage type='lg'/></div>
      <div><ProductDetails/></div>
    </div>
  )
}

export default Product
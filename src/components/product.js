import React, { useState, useEffect } from 'react'
import Aesop from '../images/aesop-logo.svg'
import ProductImage from './ProductImage'
import ProductDetails from './ProductDetails'
import getData from '../services/getData'

const Product = () => {
  const [productInfo, setProductInfo] = useState('')
  useEffect(() => {
    getData('products').then(items => setProductInfo(items))
  },[])
  return (
    <div className='product-layout'>
      {productInfo && console.log('productInfo', productInfo)}
      <Aesop className='aesop-logo-main' />
      <div />
      <div>
        <ProductImage type='lg'/>
      </div>
      <div>
        <ProductDetails products={productInfo} />
      </div>
    </div>
  )
}

export default Product
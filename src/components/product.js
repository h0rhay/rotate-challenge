import React, { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../hooks/ProductContextHook'
import Aesop from '../images/aesop-logo.svg'
import ProductImage from './ProductImage'
import ProductDetails from './ProductDetails'
import getData from '../services/getData'
import SpringIn from './SpringIn'

const Product = () => {
  const { productSize } = useContext(ProductContext)
  const [productInfo, setProductInfo] = useState('')
  useEffect(() => {
    getData('products').then(items => setProductInfo(items))
  },[])
  return (
    <div className='product-layout'>
      <Aesop className='aesop-logo-main' />
      <div />
      <div>
      {
        productSize && productSize === 'small' &&
          <SpringIn>
            <ProductImage type='sm'/>
          </SpringIn>
      }
      {
        productSize && productSize === 'large' &&
          <SpringIn>
            <ProductImage type='lg'/>
          </SpringIn>
      }
      </div>
      <div>
        <ProductDetails products={productInfo} />
      </div>
    </div>
  )
}

export default Product
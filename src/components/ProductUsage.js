import React, { useState, useEffect } from 'react'
import ProductImage from './ProductImage';
import getData from '../services/getData';
import ProductUsageDetails from './ProductUsageDetails';

const ProductUsage = () => {
  const [productInfo, setProductInfo] = useState('')
  useEffect(() => {
    getData('products').then(items => setProductInfo(items))
  },[])
  return (
    <section className='product-usage-wrap full-width'>
      <div>
        <ProductImage type='detail'/>
      </div>
      <div className='product-usage-details'>
        <ProductUsageDetails products={productInfo}/>
      </div>
    </section>
  )
}

export default ProductUsage

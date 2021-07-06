import React, { useEffect, useState } from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import useImages from '../hooks/useImages'
import getProducts from '../services/getProducts';

const Product = () => {
  const [products, setProducts] = useState()
  const [image, setImage] = useState()
  const [detailImage, setDetailImage] = useState()
  const allImages = useImages()

  const getProductImages = () => {
    allImages.filter(img => {
      let { src } = img?.gatsbyImageData?.images?.fallback
      src = src?.substring(src?.lastIndexOf("/") + 1).split("-").join(" ")
      return products?.map(item => {
        const { title } = item
        if(src?.includes(title) && !src?.includes('Texture')) {
          setImage(getImage(img))
        } else if(src?.includes(title) && src?.includes('Texture')) {
          setDetailImage(getImage(img))
        }
        return null
      })
    })
  }
  useEffect(() => {
    getProducts().then(items => setProducts(items))
  },[])
  useEffect(() => {
    getProductImages()
  },[products])
  return (
    <div>
      {products && image && <GatsbyImage image={image} alt='' />}
      {products && detailImage && <GatsbyImage image={detailImage} alt='' />}
    </div>
  )
}

export default Product
import React, { useEffect, useState } from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import useImages from '../hooks/useImages'
import getProducts from '../services/getData'

const ProductImage = ({type}) => {
  const [products, setProducts] = useState()
  const [lgImage, setLgImage] = useState()
  const [smImage, setSmImage] = useState()
  const [detailImage, setDetailImage] = useState()
  const allImages = useImages()

  const getProductImages = () => {
    allImages.filter(img => {
      let { src } = img?.gatsbyImageData?.images?.fallback
      src = src?.substring(src?.lastIndexOf("/") + 1).split("-").join(" ")
      return products?.map(item => {
        const { title } = item
        if(src?.includes(title) && src.includes('200mL') && !src?.includes('Texture')) {
          setLgImage(getImage(img))
        } else if(src?.includes(title) && src.includes('100mL') && !src?.includes('Texture')) {
          setSmImage(getImage(img))
        } else if(src?.includes(title) && src?.includes('Texture')) {
          setDetailImage(getImage(img))
        }
        return null
      })
    })
  }
  useEffect(() => {
    getProducts('products').then(items => setProducts(items))
  },[])
  useEffect(() => {
    getProductImages()
  },[products])
  return (
    <>
      {type === 'sm' && products && smImage && <GatsbyImage image={smImage} alt='' />}
      {type === 'lg' && products && lgImage && <GatsbyImage image={lgImage} alt='' />}
      {type === 'detail' && products && detailImage && <GatsbyImage image={detailImage} alt='' />}
    </>
  )
}

export default ProductImage
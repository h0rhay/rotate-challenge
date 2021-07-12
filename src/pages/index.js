import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Product from '../components/Product'
import ProductUsage from '../components/ProductUsage'

const ProductContent = () => {
  return (
    <>
      <Product />
      <ProductUsage />
    </>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Product Page" />
      <ProductContent />
    </Layout>
  )
}

export default IndexPage

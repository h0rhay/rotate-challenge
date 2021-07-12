import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Product from '../components/Product'

const ProductContent = () => {
  return (
    <Product />
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

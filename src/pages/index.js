import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Product from '../components/Product'

const IndexPage = () => {
  

  return (
    <Layout>
      <Seo title="Product Page" />
      <Product/>
    </Layout>
  )
}

export default IndexPage

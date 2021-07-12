import React from "react"
import { ProductContextProvider } from '../hooks/ProductContextHook'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Cart from './Cart'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ProductContextProvider>
      <Cart />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className='site-constrainer'>
        {children}
      </main>
      <footer className='site-constrainer'>
        © {new Date().getFullYear()}, Built with ❤️
      </footer>
    </ProductContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import * as React from "react"
import { GlobalContextProvider } from '../hooks/useGlobalContext'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"

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
    <GlobalContextProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className='site-constrainer'>
        {children}
      </main>
      <footer className='site-constrainer'>
        © {new Date().getFullYear()}, Built with ❤️
      </footer>
    </GlobalContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

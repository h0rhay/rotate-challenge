import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
import getData from '../services/getData';

const Nav = ({ type, classes }) => {
  const [navigationItems, setNavigationItems] = useState('')
  useEffect(() => {
    getData('navigation').then(items => setNavigationItems(items))
  }, [])
  return (
    <>
      <ul className={`${classes} ${type}`}>
        {navigationItems && 
          navigationItems[type].map(item => {
            return (
              <li key={`${item.label}-${item.id}`}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Nav
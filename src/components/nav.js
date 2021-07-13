import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby';
import getData from '../services/getData';
import { ProductContext } from '../hooks/ProductContextHook';

const Nav = ({ type, classes }) => {
  const [navigationItems, setNavigationItems] = useState('')
  const { cartOpen, setCartOpen } = useContext(ProductContext)
  const handleClick = () => setCartOpen(!cartOpen)
  useEffect(() => {
    getData('navigation').then(items => setNavigationItems(items))
  }, [])
  return (
    <>
      <ul className={`${classes} ${type}`}>
        {navigationItems && 
          navigationItems[type].map(item => {
            console.log('nav-label', item.label)
            if (item.label === 'Cart') {
              return (
                <li key={`${item.label}-${item.id}`}>
                  <p onClick={() => handleClick()} className='cart-item'>{`${item.label}`}</p>
                </li>
              )
            } else {
              return (
                <li key={`${item.label}-${item.id}`}>
                  <Link to={'/'}>{`${item.label}`}</Link>
                </li>
              )
            }
          })
        }
      </ul>
    </>
  )
}

export default Nav
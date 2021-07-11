import React, { useState, useEffect } from "react"
import Nav from './Nav'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import AesopLogo from '../images/aesop-logo.svg'

const Header = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  const [mobileNavViz, setMobileNavViz] = useState(false)
  const toggleMobileNav = () => {
    setMobileNavViz(!mobileNavViz)
  }
  useEffect(() => {
    const handleResize = () => setWinWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <header className='header site-constrainer'>
      {
        winWidth >= 768 ?
        <div className='header_LgScreenNav'>
          <Nav type='primary' classes='header_nav_block' />
          <Nav type='secondary' classes='header_nav_block' />
        </div>
        : 
        <>
          <div className='aesop-logo-sm-wrap'>
            <AesopLogo className='aesop-logo_mobile'/>
          </div>
          <div className={`header_SmScreenNav ${mobileNavViz && `mobile_nav_visible`}`}>
            <div>
              <AesopLogo className='aesop-logo_mobile'/>
            </div>
            <Nav type='primary' classes='header_nav_block' />
            <Nav type='secondary' classes='header_nav_block' />
          </div>
          <HiOutlineMenuAlt4 className='Mobile_Nav_Trigger' onClick={toggleMobileNav}/>
        </>
      }
    </header>
  )
}

export default Header

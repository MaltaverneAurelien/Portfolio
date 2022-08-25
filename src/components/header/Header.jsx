import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Aurélien Maltaverne</h1>
        <h4 className="text-primary-variant">Fullstack Developer Junior</h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
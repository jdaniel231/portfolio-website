import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Ola! Eu sou </h5>
        <h2>João Daniel</h2>
        <h5 className="text-light">desenvolvedor Font-End</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scrool__down" >Scrool Down</a>
      </div>
    </header>
  )
}

export default Header
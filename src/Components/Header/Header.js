import React from 'react'
import './Header.css'
import logo from "../../img/logo-social.png"
function Header() {
    return (
      <div className='Header'>
        <img src={logo}></img>
      </div>
    );
  }

export default Header
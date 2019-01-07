import React from 'react'
import './header.css'

const Header = () => (
  <div className="container__header">
    <div className='header'>
      <div className="header__logo">
        <a href="../../">
          <span>Sergey Kovalchuk</span>
        </a>
      </div>  
      <div className="header__navigation">
        <button className="btn btn--active">ru</button>
        <button className="btn">en</button>
      </div>
    </div>  
  </div>
)

export default Header

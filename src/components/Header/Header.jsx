import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import headerLogo from '../../assets/img/header-logo.png'

function Header() {
  return (
    <div className='header container'>
      <div className="nav">
        <img className='header__logo' src={headerLogo} alt="" />
        <ul className='header__list'>
          <li className='header__list__item'>
            <Link>Home</Link>
          </li>
          <li className='header__list__item'>
            <Link>Courses</Link>
          </li>
          <li className='header__list__item'>
            <Link>Careers</Link>
          </li>
          <li className='header__list__item'>
            <Link>Blog</Link>
          </li>
          <li className='header__list__item'>
            <Link>About Us</Link>
          </li>
          <li className='header__list__nth-child'>
            <Link>Login</Link>
          </li>
          <li className='header__list__last-child'>
            <Link>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

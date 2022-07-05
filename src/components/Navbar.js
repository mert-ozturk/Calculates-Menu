import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Navbar() {


  
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/calculate'>Calculate</Link>
          </li>
          <li>
            <Link to='/urunler'>Urunler</Link>
          </li>
          <li>
            <Link to='/youtube'>Youtube</Link>
          </li>
         
          <li>
            <Link to='/denemeurun'>Deneme URUN</Link>
          </li>
          <li>
            <Link to='/grocery'>Form</Link>
          </li>
          <li>
            <Link to='/form'>Form 2</Link>
          </li>
          <li>
            <Link to='/useref'>User Add</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
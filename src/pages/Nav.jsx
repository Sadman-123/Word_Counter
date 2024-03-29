import React from 'react'
import '../CSS/style.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='navbar'>
  <Link class="active" to="/home">
    <i class="fa-solid fa-house"></i>Home
    </Link>
  <Link to="/clock"><i class="fa-solid fa-clock">
    </i>Clock
  </Link>
  <Link to="/color">
    <i class="fa-solid fa-palette"></i>Colors
    </Link>
  <Link to="/about">
    <i class="fa-solid fa-circle-info"></i>About
    </Link>
    </div>
  )
}

export default Nav
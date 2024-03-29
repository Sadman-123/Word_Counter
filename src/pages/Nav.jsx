import React from 'react'
import '../CSS/style.css'
const Nav = () => {
  return (
    <div className='navbar'>
<a class="active" href="#"><i class="fa-solid fa-house"></i>Home</a>
  <a href="#"><i class="fa-solid fa-clock"></i>Clock</a>
  <a href="#"><i class="fa-solid fa-palette"></i>Colors</a>
  <a href="#"><i class="fa-solid fa-circle-info"></i>About</a>
    </div>
  )
}

export default Nav
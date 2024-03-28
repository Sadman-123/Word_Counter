import React from 'react'
import '../CSS/style.css'
import App from '../App'
import { Link } from 'react-router-dom'
const Splash = () => {
  return (
    <div className='splsh'>
<h1>স্বাগতম</h1>
<Link to='/word_counter'>
<i class="fa-solid fa-circle-chevron-right"></i>
</Link>
    </div>
  )
}

export default Splash
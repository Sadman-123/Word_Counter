import React from 'react'
import '../CSS/style.css'
import { Link } from 'react-router-dom'
const Heading = () => {
  return (
    <div className='hdng'>
        <h1>
          <Link to='/'>
        <i class="fa-solid fa-calculator" id='lol'></i>  
          </Link>
           Word Counter
        </h1>
    </div>
  )
}
export default Heading
import React from 'react'
import '../CSS/style.css'
const Output = (props) => {
  return (
    <div className='out'>
        <h2>
            {props.val}
        </h2>
    </div>
  )
}

export default Output
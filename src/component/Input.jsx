import React, { useState } from 'react'
import Output from './Output'
import '../CSS/style.css'
const Input = () => {
  const [word,setword]=useState("");
  return (
    <div className='inpt'>
        <input type="text" name="" id="" placeholder='Enter Word' onChange={(e)=>{
          setword(e.target.value)
          }}/>
         <Output val={word.length}/>
    </div>
  )
}

export default Input
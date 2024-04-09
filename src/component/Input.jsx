import React, { useState } from 'react'
import Output from './Output'
import '../CSS/style.css'
const Input = () => {
  const [word,setword]=useState("");
  return (
   <>
      <div className="hlw">
        <input type="text" name="" id="" placeholder='Enter Word' onChange={(e)=>{
          setword(e.target.value)
          }}/>
          <i class="fa-solid fa-eye-slash"></i>
      </div>
         <Output val={word.length}/>
   </>
  )
}

export default Input
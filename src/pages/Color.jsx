import React, { useState } from 'react'
import '../CSS/style.css'
import Nav from './Nav'
const Color = () => {
    const [clr,setclr]=useState("Color Code");
  return (
    <>
    <Nav/>
    <div className='clr'>
<h1>Color Picker</h1>
<div className="container">
<div className="clrcanvas" id='clrcanvas'>
    <h2 id='clr_code'>{clr}</h2>
    <input type="color" name="" id="" onChange={(e)=>{
        setclr(e.target.value)
        let x=document.getElementById('clr_code')
        let x_bg=document.getElementById('clrcanvas')
        x_bg.style.backgroundColor=clr
    }} />
</div>
</div>
    </div>
    </>
  )
}

export default Color
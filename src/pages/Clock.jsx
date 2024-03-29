import React, { useState } from 'react'
import '../CSS/style.css'
import Nav from './Nav'
const Clock = () => {
const [time,settime]=useState("😇 Loading...");
let xx=()=>{
    settime(new Date().toLocaleTimeString())
}
setInterval(xx,1000);
  return (
    <>
    <Nav/>
    <div className='clk'>
        <h1>
            {time}
        </h1>
    </div>
    </>
  )
}
export default Clock
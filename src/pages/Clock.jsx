import React, { useState } from 'react'
import '../CSS/style.css'
const Clock = () => {
const [time,settime]=useState("");
let xx=()=>{
    settime(new Date().toLocaleTimeString())
}
setInterval(xx,1000);
  return (
    <div className='clk'>
        <h1>
            {time}
        </h1>
    </div>
  )
}
export default Clock
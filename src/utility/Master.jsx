import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Splash from '../pages/Splash'
import Color from '../pages/Color'
import Clock from '../pages/Clock'
import About from '../pages/About'
import App from '../App'
const Master = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Splash/>}/>
            <Route path='/home' element={<App/>}/>
            <Route path='/color' element={<Color/>}/>
            <Route path='/clock' element={<Clock/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Master
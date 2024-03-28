import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Splash from '../pages/Splash'
import App from '../App'
const Master = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Splash/>}/>
            <Route path='/word_counter' element={<App/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Master
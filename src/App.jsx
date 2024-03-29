import React from 'react'
import Heading from './component/Heading'
import Input from './component/Input'
import Nav from './pages/Nav'
import Clock from './pages/Clock'
import Color from './pages/Color'
const App = () => {
  return (
    <div>
      <Nav/>
      {/* <Heading/>
      <Input/>
      <Clock/> */}
      <Color/>
    </div>
  )
}

export default App
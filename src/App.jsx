import React from 'react'
import Heading from './component/Heading'
import Input from './component/Input'
import Nav from './pages/Nav'
import Clock from './pages/Clock'
const App = () => {
  return (
    <div>
      <Nav/>
      {/* <Heading/>
      <Input/> */}
      <Clock/>
    </div>
  )
}

export default App
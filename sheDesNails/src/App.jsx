import { useState } from 'react'
import './App.css'

import NavBar from './component/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <h1>I DIDN'T BREAK IT</h1>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import Navbar from './components/ui/Navbar'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Navbar/>
    <Login/>
    

    
    </>
  )
}

export default App

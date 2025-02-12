import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Box from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Link to ="/">Home</Link>
      <Link to ="/login">Login</Link>
      <Routes>
        <Route path="/" element={ <div>메인페이지</div> } /> 
        <Route path="/login" element = {<>로그인페이지</>}/>
      
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componets/Navbar'
import Home from './views/Home'

function App() {
 //const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    
    </>
  )
}

export default App

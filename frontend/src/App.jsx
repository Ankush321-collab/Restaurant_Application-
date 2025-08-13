import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Navbar from './components/Navbar'
import About from './components/about'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<Menu/>}/>

    </Routes>
  
    <Toaster /> {/* ✅ now it works */}
  </>
  
  )
}

export default App

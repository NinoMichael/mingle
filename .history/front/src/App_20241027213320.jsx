import './index.css'
import './App.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CodeVerification from './pages/CodeVerification'
import InfoRegister from './pages/InfoRegister'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <div className='min-h-screen'>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/code-verification" element={<CodeVerification />} />
            <Route path="/info-register" element={<InfoRegister />} />
          </Routes>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App

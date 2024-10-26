import './index.css'
import './App.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home'

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
    <>
      <AnimatePresence>
        <body className='min-h-screen'>
              <Routes>
                <Route exact path="/" element={Homepage />} />
              </Routes>
        </body>
      </AnimatePresence>
    </>
  )


}

export default App

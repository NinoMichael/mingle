import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

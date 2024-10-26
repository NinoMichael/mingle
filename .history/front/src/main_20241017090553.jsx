import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/saga-green/theme.css'
import 'primeicons/primeicons.css'
import './index.css'

import { LanguageProvider } from './utils/LangConfig.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <LanguageProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LanguageProvider>
)

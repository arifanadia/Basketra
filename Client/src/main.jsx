import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx'
import { Toaster } from 'sonner'
import { SearchProvider } from './Providers/SearchProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SearchProvider>
        <App />
        <Toaster closeButton />
      </SearchProvider>
    </AuthProvider>
  </StrictMode>,
)

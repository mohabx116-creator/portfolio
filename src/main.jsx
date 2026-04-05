import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { AppSettingsProvider } from './context/AppSettingsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AppSettingsProvider>
          <App />
        </AppSettingsProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)

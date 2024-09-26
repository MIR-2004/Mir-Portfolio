import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Context';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
    </ThemeProvider>,
)
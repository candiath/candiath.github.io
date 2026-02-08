import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/config'
import App from './App.tsx'

// Ocultar spinner cuando React se monta
const loadingScreen = document.getElementById('loading-screen');


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Remover spinner después de que React renderice
if (loadingScreen) {
  loadingScreen.style.display = 'none';
}

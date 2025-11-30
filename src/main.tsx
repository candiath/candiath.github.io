import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Ocultar spinner cuando React se monta
const loadingScreen = document.getElementById('loading-screen');

const preloadComponents = () => {
  import("./components/Navigation");
  import("./components/Hero");
  // etc.
};
preloadComponents();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Remover spinner después de que React renderice
if (loadingScreen) {
  loadingScreen.style.display = 'none';
}

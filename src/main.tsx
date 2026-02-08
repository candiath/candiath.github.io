import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/config'
import App from './App.tsx'

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  }
};

initializeTheme();

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

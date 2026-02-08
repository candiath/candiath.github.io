import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/config'
import App from './App.tsx'
import { getInitialTheme, applyThemeClass } from './helpers/theme.helper'

const initializeTheme = () => {
  const theme = getInitialTheme();
  applyThemeClass(theme);
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

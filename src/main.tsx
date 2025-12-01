import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const loadingScreen = document.getElementById('loading-screen');

const preloadComponents = () => {
  import("./components/Navigation");
  import("./components/Hero");
};
preloadComponents();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (loadingScreen) {
  loadingScreen.style.display = 'none';
}

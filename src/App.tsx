import { Suspense, lazy, useEffect, useState } from "react";
import { Spinner } from "./components/ui/Spinner";
import { ThemeProvider } from "./contexts/ThemeProvider";

import { Hero } from "./components/Hero";
import Navigation from "./components/Navigation";
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const MiniApps = lazy(() => import("./components/MiniApps").then(m => ({ default: m.MiniApps })));
const Experience = lazy(() => import("./components/Experience").then(m => ({ default: m.Experience })));
const Courses = lazy(() => import("./components/Courses").then(m => ({ default: m.Courses })));
const CV = lazy(() => import("./components/CV").then(m => ({ default: m.CV })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

const LazyContent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      // Función para buscar elemento por ID o alias
      const findSectionElement = (sectionId: string): HTMLElement | null => {
        // Primero intentar buscar por ID
        let element = document.getElementById(sectionId);
        
        // Si no se encuentra, buscar por alias
        if (!element) {
          const allSections = document.querySelectorAll('[data-section-aliases]');
          for (const section of allSections) {
            const aliases = section.getAttribute('data-section-aliases')?.split(',') || [];
            if (aliases.includes(sectionId)) {
              element = section as HTMLElement;
              break;
            }
          }
        }
        
        return element;
      };

      // Handle redirects from 404 page
      const redirectPath = sessionStorage.getItem('redirectPath');
      if (redirectPath && redirectPath !== '/') {
        sessionStorage.removeItem('redirectPath');
        const section = redirectPath.slice(1);
        window.history.replaceState(null, '', `/${section}`);
        setTimeout(() => {
          const element = findSectionElement(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
        return;
      }

      // Handle direct pathname (development)
      const pathname = window.location.pathname;
      if (pathname && pathname !== '/') {
        const section = pathname.slice(1);
        setTimeout(() => {
          const element = findSectionElement(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    }
  }, [loaded]);

  return (
    <>
      <Projects />
      <MiniApps />
      <Experience />
      <Courses />
      <CV />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
      <Hero />
      <Suspense fallback={<Spinner />}>
        <LazyContent />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

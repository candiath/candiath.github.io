import { Suspense, lazy, useEffect, useState } from "react";
import { Spinner } from "./components/ui/Spinner";

import { Hero } from "./components/Hero";
import Navigation from "./components/Navigation";
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const Experience = lazy(() => import("./components/Experience").then(m => ({ default: m.Experience })));
const Courses = lazy(() => import("./components/Courses").then(m => ({ default: m.Experience })));
const CV = lazy(() => import("./components/CV").then(m => ({ default: m.CV })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

function LazyContent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  }, [loaded]);

  return (
    <>
      <About />
      <Projects />
      <Experience />
      <Courses />
      <CV />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
        <Hero />
        <Navigation />

      <Suspense fallback={<Spinner />}>
        <LazyContent />
      </Suspense>
    </>
  );
}

export default App;

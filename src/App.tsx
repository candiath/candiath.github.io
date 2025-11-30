import { Suspense, lazy } from "react";
import { Spinner } from "./components/ui/Spinner";

import { Hero } from "./components/Hero";
import Navigation from "./components/Navigation";
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const Experience = lazy(() => import("./components/Experience").then(m => ({ default: m.Experience })));
const CV = lazy(() => import("./components/CV").then(m => ({ default: m.CV })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));


function App() {
  return (
    <>
        <Hero />
        <Navigation />

      <Suspense fallback={<Spinner />}>
        <About />
        <Projects />
        <Experience />
        <CV />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;

import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CV } from "./components/CV";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Navigation from "./components/Navigation";
import { Projects } from "./components/Projects";

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <Navigation />
      <Hero />
      <About/>
      <Projects/>
      <Experience />
      <CV />
      <Contact />
      {/* <Timestamp /> */}
      <Footer/>
    </>
  );
}

export default App;

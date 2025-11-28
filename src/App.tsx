import "./App.css";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Navigation from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Timestamp } from "./components/Timestamp";

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <Navigation />
      <Hero />
      <Projects/>
      <Experience />
      <Contact />
      {/* <Timestamp /> */}
      <Footer/>
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import { ToastProvider } from "./components/Toast";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Education from "./sections/Education";
import GithubSection from "./sections/Github";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <ToastProvider>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <GithubSection />
      <Contact />
      <Footer /> 
      <BackToTop />
    </ToastProvider>
  );
}

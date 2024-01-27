// import Image from 'next/image'

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function Home() {
  return (
    //bg-[#121212]
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </div>
      <Footer/>

    </main>
  );
}

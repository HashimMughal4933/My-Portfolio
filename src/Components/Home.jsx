import React,{useEffect} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from '../Pages/Navbar'
import Hero from "../Pages/Hero"
import About from '../Pages/About'
import Skills from '../Pages/Skills'
import Project from '../Pages/Project'
import Contact from '../Pages/Contact';
 import Footer from '../Pages/Footer';
const Home = () => {
 React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100,
    });
    AOS.refresh();
  }, [])
  return (

    <div>
    <Navbar />

    <section id='hero'>
    <Hero />
    </section>

    <section id='about'>
    <About />
    </section>

    <section id='skills'>
    <Skills />
    </section>
    <section id='project'>
    < Project/>
    </section>
    <section id='contact'>
    < Contact/>
    </section>
    <section>
    <Footer/>
    </section>
  
    </div>
  )
}

export default Home
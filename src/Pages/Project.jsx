import React from 'react'
import netsharp from '../assets/netsharp.PNG'
import netflix from '../assets/netflix.PNG'
import todo from '../assets/todos.PNG'
import portfolio from '../assets/portfolio.PNG'
import light from '../assets/light.png'
import rays from '../assets/rays.jpeg'

import { IoIosArrowRoundUp } from "react-icons/io";

const Project = () => {
  return (
    <div className='w-full h-520 sm:w-full sm:h-235 mt-10 px-3 sm:px-5 sm:py-2 '>

      <div className='w-full h-51 sm:w-full sm:h-60 px-1 sm:px-2 py-2 sm:py-3'>
        <h2 data-aos='fade-up' data-aos-delay='300' className=' name-text text-xl  sm:text-2xl  w-full h-10 sm:w-full sm:h-14  flex justify-center items-center'>FEATURED WORK</h2>
        <h1 data-aos='fade-up' data-aos-delay='400' className=' N-txt text-2xl  sm:text-5xl md:text-6xl lg:text-7xl   w-full h-15 sm:w-full sm:h-23 flex justify-center items-center' >Projects That Define Me</h1>
        <p data-aos='zoom-in' data-aos-delay='450' className=' text-amber-900 flex justify-center items-center  mt-2 sm:mt-3 text-center' >A selection of projects built with attention to detail, modern aesthetics and clean code.</p>
      </div>

      <div data-aos='fade-up' data-aos-delay='300'  className=' 
      w-full sm:w-full
      h-300 sm:h-125
      gap-2  px-1 py-2.5 sm:px-2 sm:py-1
      ' >
        <section  data-aos='fade-up' data-aos-delay='500' className='w-\[100%\] h-0.5 bg-white/20'></section>
        <img data-aos='fade-up' data-aos-delay='600' src={light} className='light  w-40 h-30  mx-auto' alt="porfolio property" />
         <div data-aos='fade-in' data-aos-delay='1000' className=' relative w-full sm:full h-334 sm:h-105'>
                <img src={rays} className=' ray w-full sm:w-80 h-330 sm:h-120 sm:mx-auto -mt-3 object-fill ' alt="" />
         </div>




         <div className='w-full sm:w-180  h-315 sm:h-106 -mt-320 sm:-mt-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-40 gap-2 py-2 mx-auto'>
        
           <div  data-aos='fade-in' data-aos-delay="1200" className=' project-card  w-full h-120 sm:w-80 sm:h-120 sm:-rotate-12'>
            <img src={netflix} className='project-image' alt="" />
            <div className='project-content '>
                   <h2 className='project-title name-text text-3xl'> Netflix Clone</h2>
                   <p className='project-description'>
                     My first frontend practice project, recreating a Netflix-inspired interface using HTML and CSS to build a strong foundation in web structure and styling.
                   </p>
                   <div className='project-technologies'>
                    <span className='tech'> Html</span>
                    <span className='tech'> Css</span>
                   </div>
                   <button className='project-btn'><IoIosArrowRoundUp className='rotate-25 w-5 h-5' /><a target='_blank' href="https://github.com/HashimMughal4933/Netflix-Clone">View Code</a></button>
            </div>
      </div>
           <div data-aos='fade-in' data-aos-delay="1300" className=' project-card  w-full h-120 sm:w-80 sm:h-120 '>
            <img src={netsharp} className='project-image' alt="" />
            <div className='project-content '>
                   <h2 className='project-title name-text text-3xl'> Netsharp - Music for you</h2>
                   <p className='project-description'>
                    A Spotify-inspired music player built with HTML, CSS, and JavaScript, featuring a clean interface and interactive music controls. This project helped me strengthen my frontend skills.
                   </p>
                   <div className='project-technologies'>
                    <span className='tech'> Html</span>
                    <span className='tech'> Css</span>
                    <span className='tech'> Js</span>
                   </div>
                   <button className='project-btn'><IoIosArrowRoundUp className='rotate-25 w-5 h-5' /><a target='_blank' href="https://github.com/HashimMughal4933/Netsharp---Clone">View Code</a></button>
            </div>
      </div>
           <div  data-aos='fade-in' data-aos-delay="1400" className=' project-card  w-full h-120 sm:w-80 sm:h-120 sm:rotate-12 '>
            <img src={portfolio} className='project-image' alt="" />
            <div className='project-content '>
                   <h2 className='project-title name-text text-3xl'>My Personal Portfolio</h2>
                   <p className='project-description'>
                    A modern and responsive developer portfolio showcasing my skills, projects, and journey as a Front-End Developer. Built with a focus on clean UI, responsive layouts, smooth interactions, and practical web development.
                   </p>
                   <div className='project-technologies'>
                    <span className='tech'>React Js</span>
                    <span className='tech'>Tailwind Css</span>
        
                   </div>
                   <button className='project-btn'><IoIosArrowRoundUp className='rotate-25 w-5 h-5' /><a target='_blank' href="https://github.com/HashimMughal4933/My-Portfolio/tree/main">View Code</a></button>
            </div>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Project
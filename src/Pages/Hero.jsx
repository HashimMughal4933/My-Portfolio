import React from 'react'
import Mypic from '../assets/hashim.jpeg'
import Reactpic from '../assets/network2.jpeg';
import { useRef, useEffect } from 'react'
import Typed from 'typed.js';
const Hero = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FrontEnd Developer', 'React Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='relative w-full h-256 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:w-full sm:h-130 mt-13 sm:mt-13 px-1'>


      <div className='h-106 w-auto sm:h-140  flex flex-col py-1'>

        <div className='w-45 h-15 sm:w-45 sm:h-10 flex justify-center items-center rounded-3xl text-xs mt-6 ml-2 sm:ml-10 border cursor-pointer'>Available for Opportunities</div>

        <span data-aos="fade-up" data-aos-delay="100" className='font-light sm:text-xl text-gray-400 tracking-[1px] px-3 py-3 sm:px-10 sm:py-7'>Hello,I'm</span>

        <h1 data-aos="fade-up" data-aos-delay="200" className=" N-txt text-2xl sm:text3xl md:text-4xl lg:text-6xl px-3 sm:px-10 text-white">
          Hashim Mughal

        </h1>

        <h1 data-aos="flip-left" data-aos-delay="500" className='hero-text text-xl sm:text-2xl md:text-2xl lg:text-3xl px-3 sm:px-10 mt-2 sm:mt-5'><span ref={el} /></h1>

        <p data-aos="fade-up" data-aos-delay="600" className="mt-4 h-auto w-auto sm:w-130 sm:h-auto text-[19px] leading-7 sm:text-[17px] font-extralight px-3 sm:px-10">
          I’m a Frontend Developer specializing in modern, responsive, and high-performance web experiences.
          Focused on delivering scalable, user-centric digital experiences with precision and attention to detail.
        </p>

        <div className='w-full flex flex-col sm:flex-row  mt-15 px-9 sm:mt-4 sm:px-12 gap-6 sm:gap-7'>
          <button data-aos="fade-up" data-aos-delay="800" className='btn-1     w-58 sm:w-28 h-11 flex justify-center items-center rounded-full bg-black cursor-pointer'> <a target='_blank' href="https://github.com/HashimMughal4933"><p className='T'>View github</p></a></button>
          <button data-aos="fade-up" data-aos-delay="900" className='btn-1     w-58 sm:w-28 h-11 flex  justify-center items-center rounded-full bg-black cursor-pointer'> <a target='_blank' href="/CV.pdf"><p className='T'> View CV</p></a></button>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-center gap-5.5 sm:gap-2'>

        <div data-aos="zoom-in" data-aos-delay="800" className='pic-circle-dot   w-72 h-72 sm:w-100 sm:h-100  flex justify-center items-center rounded-full '>
          <div className='pic-circle  w-57 h-57 sm:w-85 sm:h-85 flex justify-evenly items-center rounded-full animate-[spin_22s_linear_infinite]'>
            <span className='border w-9 h-9 sm:w-10 sm:h-10 ml-2 sm:ml-3 -mt-50 sm:-mt-82 rounded-full flex justify-center items-center '><img src={Reactpic} className='  rounded-full w-8 h-8 sm:w-9 sm:h-9 ' alt="" /></span>
            <span className='border  w-9 h-9 sm:w-10 sm:h-10 ml-14 mt-45 sm:-ml-25 sm:mt-82 rounded-full flex justify-center items-center'><img src={Reactpic} className='rounded-full w-8 h-8 sm:w-9 sm:h-9' alt="" /></span>

          </div>
          <img src={Mypic} className='w-45 h-45 sm:w-68 sm:h-68 relative rounded-full opacity-100' alt="" />

        </div>
      </div>

    </div>
  )
}

export default Hero
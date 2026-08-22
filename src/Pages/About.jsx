import React from 'react'
import '../App.css'
import { IoCheckmarkCircle } from "react-icons/io5";

const About = () => {

  return (

    <div className='w-full h-375 sm:w-full sm:h-173 grid grid-cols-1 sm:grid-cols-2 px-2 py-1 mt-5'>
      <div data-aos='fade-up' data-aos-delay='200' className="relative w-full sm:w-full  overflow-hidden flex items-center ">

        <div className="absolute w-80 h-80 sm:w-125 sm:h-125 bg-purple-600/10 blur-[150px] rounded-full"></div>

        <div className="relative w-full h-170 sm:w-full sm:max-w-6xl sm:h-150 `perspective:1000px`">

          <div className=' rot  absolute -mt-20 inset-0'>

            <div className="absolute top-[45%] left-[18%] w-[65%] h-px bg-white/20 rotate-8"></div>

            <div className="absolute top-[30%] left-[25%] w-[55%] h-px bg-white/20 -rotate-12"></div>

            <div className="absolute top-[55%] left-[30%] w-[45%] h-px bg-purple-400/30 rotate-25"></div>

            <div className="absolute top-[25%] left-[45%] w-px h-[55%] bg-white/20 rotate-20"></div>

            <div className="absolute top-[35%] left-[55%] w-px h-[45%] bg-purple-400/30 -rotate-25"></div>

            <div className="absolute top-[50%] left-[20%] w-[70%] h-px bg-white/10 -rotate-25"></div>

            <div className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-32 h-32
        rounded-full
        bg-zinc-950
        border border-white/20
        shadow-[0_0_50px_rgba(168,85,247,0.35)]
        flex flex-col items-center justify-center
        animate-[float_5s_ease-in-out_infinite]
      ">
              <span className="text-cyan-400 text-4xl">⚛</span>
              <span className="text-white text-sm mt-2">React</span>
            </div>




            <div className="
        absolute top-[18%]  left-[14%] sm:left-[22%]
        w-24 h-24
        rounded-full
        bg-zinc-950
        border border-white/20
        shadow-[0_0_30px_rgba(255,255,255,0.15)]
        flex flex-col items-center justify-center
        animate-[float_6s_ease-in-out_infinite]
      ">
              <span className="text-orange-500 text-2xl font-bold">5</span>
              <span className="text-white text-xs mt-1">HTML</span>
            </div>




            <div className="
        absolute top-[52%] left-[3%] sm:left[8%]
        w-24 h-24
        rounded-full
        bg-zinc-950
        border border-white/20
        shadow-[0_0_30px_rgba(59,130,246,0.25)]
        flex flex-col items-center justify-center
        animate-[float_7s_ease-in-out_infinite]
      ">
              <span className="text-blue-500 text-2xl font-bold">3</span>
              <span className="text-white text-xs mt-1">CSS</span>
            </div>




            <div className="
        absolute top-[12%] right-[28%]
        w-24 h-24
        rounded-full
        bg-zinc-950
        border border-white/20
        shadow-[0_0_30px_rgba(250,204,21,0.25)]
        flex flex-col items-center justify-center
        animate-[float_5.5s_ease-in-out_infinite]
      ">
              <span className="bg-yellow-400 text-black px-2 py-1 text-sm font-bold">
                JS
              </span>
              <span className="text-white text-xs mt-2">JavaScript</span>
            </div>




            <div className="
        absolute top-[30%] right-[8%]
        w-24 h-24
        rounded-full
        bg-zinc-950
        border border-white/20
        shadow-[0_0_30px_rgba(34,211,238,0.3)]
        flex flex-col items-center justify-center
        animate-[float_6.5s_ease-in-out_infinite]
      ">
              <span className="text-cyan-400 text-xl font-bold">〰</span>
              <span className="text-white text-xs mt-1">Tailwind</span>
            </div>




            <div className="
        absolute bottom-[15%] right-[15%]
        w-24 h-24
        rounded-full
        bg-zinc-950
        border border-white/20
        shadow-[0_0_30px_rgba(132,204,22,0.25)]
        flex flex-col items-center justify-center
        animate-[float_7.5s_ease-in-out_infinite]
      ">
              <span className="text-green-400 text-lg font-bold">JS</span>
              <span className="text-white text-xs mt-1">Node.js</span>
            </div>




            <div className="
        absolute bottom-[10%] left-[5%] sm:left-[25%]
        w-24 h-24
        rounded-full
        bg-zinc-950
        border border-white/20
        shadow-[0_0_30px_rgba(249,115,22,0.25)]
        flex flex-col items-center justify-center
        animate-[float_6s_ease-in-out_infinite]
      ">
              <span className="text-orange-500 text-xl font-bold">◆</span>
              <span className="text-white text-xs mt-1">Git</span>
            </div>




            <div className="
        absolute bottom-[5%] left-1/2
        -translate-x-1/2
        w-24 h-24
        rounded-full
        bg-zinc-950
        border border-white/20
        shadow-[0_0_30px_rgba(139,92,246,0.3)]
        flex flex-col items-center justify-center
        animate-[float_5s_ease-in-out_infinite]
      ">
              <span className="text-purple-400 text-xl font-bold">⚡</span>
              <span className="text-white text-xs mt-1">Vite</span>
            </div>

            <span className="absolute top-[20%] left-[50%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7]"></span>

            <span className="absolute top-[60%] left-[40%] w-2 h-2 rounded-full bg-white shadow-[0_0_15px_white]"></span>

            <span className="absolute top-[35%] right-[35%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7]"></span>

            <span className="absolute bottom-[25%] left-[60%] w-2 h-2 rounded-full bg-white shadow-[0_0_15px_white]"></span>

          </div>
        </div>



        <div className="absolute bottom-12 left-0 right-0 text-center">

          <p className=" name-text text-purple-400 tracking-[0.4em] text-sm">
            FRONTEND DEVELOPER
          </p>

          <h2 className="N-txt text-white text-3xl md:text-5xl font-bold tracking-[0.2em] mt-3">
            BUILDING DIGITAL EXPERIENCES
          </h2>

        </div>


        <style>
          {`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-15px);
        }
      }
    `}
        </style>

      </div>


      <div className='px-1 py-1'>
        <h1 data-aos="fade-up" data-aos-delay="100" className='name-text text-xl sm:text-2xl mt-7 px-3 sm:px-5 mb-3'>ABOUT ME</h1>

        <p data-aos="fade-up" data-aos-delay="200"
          className=" N-txt text-2xl sm:text-2xl tracking-wide md:text-3xl lg:text-4xl px-3 sm:px-10 text-white w-auto h-auto sm:w-auto sm:h-23">
          Turning Ideas into Digital <span className=' bg-linear-to-r from-zinc-700 to-cyan-00 text-emerald-600 mt-0  sm:inline-block sm:mt-2'>
            Experiences
          </span>
        </p>

        <p data-aos="fade-up" data-aos-delay="600" className="mt-4 h-auto w-auto sm:w-140 sm:h-auto text-[17px] leading-7 sm:text-[17px] font-extralight pl-3 sm:pl-10">
          I'm Hashim Mughal - Frontend Developer passionate about building modern and responsive websites. I enjoy turning ideas and designs into clean, functional, and engaging web experiences. I'm continuously improving my skills and exploring new technologies to become a better developer.
        </p>

        <div className=' mt-4 pl- sm:pl-10'>
          <ul className='flex flex-col gap-2'>
            <li data-aos="flip-left" data-aos-delay='200' className='flex justify-start items-center gap-1.5 w-78 h-13 sm:w-120  sm:h-8 rounded-4xl bg-white/10 px-1 font-extralight text-[17px] sm:text[19px]'><IoCheckmarkCircle className="text-red-600" /> Strong Foundation in HTML, CSS & JavaScript</li>
            <li data-aos="flip-left" data-aos-delay='300' className='flex justify-start items-center gap-1.5 w-78 h-13 sm:w-120  sm:h-8 rounded-4xl bg-white/10 px-1 font-extralight text-[17px] sm:text[19px]'><IoCheckmarkCircle className="text-red-600" /> Building Responsive Websites for Mobile, Tablet & Desktop</li>
            <li data-aos="flip-left" data-aos-delay='400' className='flex justify-start items-center gap-1.5 w-78 h-13 sm:w-120  sm:h-8 rounded-4xl bg-white/10 px-1 font-extralight text-[17px] sm:text[19px]'><IoCheckmarkCircle className="text-red-600" /> React.js Developer — Creating Dynamic & Interactive UIs</li>
            <li data-aos="flip-left" data-aos-delay='500' className='flex justify-start items-center gap-1.5 w-78 h-13 sm:w-120  sm:h-8 rounded-4xl bg-white/10 px-1 font-extralight text-[17px] sm:text[19px]'><IoCheckmarkCircle className="text-red-600" /> Creative Problem Solver & Continuous Learner</li>
          </ul>
        </div>
        <div className=' w-81 sm:w-65 sm:h-30 mt-12 sm:mt-4 mx-auto flex justify-center items-center'>
          <div className=' name-text  w-20 sm:w-35 h-12 flex justify-center items-center z-40  animate-[bounce_3s_linear_infinite] '>
            <button className=' btn w-20 h-20 flex justify-center items-center rounded bg-black cursor-pointer'><p className='sp-text text-[20px]'>1+ YRS EXP.</p></button>
          </div>
          <div className=' name-text  w-20 sm:w-35 h-12 flex justify-center items-center z-40 animate-[bounce_2s_linear_infinite]'>
            <button className=' btn w-20 h-20 flex justify-center items-center rounded bg-black cursor-pointer'><p className='sp-text text-[20px]'>6+ Projects</p></button>
          </div>
          <div className=' name-text  w-20 sm:w-35 h-12 flex justify-center items-center  animate-[bounce_4s_linear_infinite]'>
            <button className=' btn w-20 h-20 flex justify-center items-center rounded bg-black cursor-pointer'><p className='sp-text text-[20px]'>5+ certificates</p></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
import React, { useState, useEffect } from 'react'
import '../App.css'
import Pic from "../assets/logoPic.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [showsidebar, setShowsidebar] = useState(false)

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className='Nav-border w-full h-13 bg-black px-3 flex justify-between items-center fixed top-0 right-0 z-50'>
      <span className="absolute top-[20%] left-[50%] w-2 h-2 rounded-full bg-black shadow-[0_0_15px_white] animate-pulse"></span>

      <div className='w-35 sm:w-50 h-12 flex justify-start sm:justify-center items-center'>
        <img src={Pic} className='Pic-Rotation       w-14 h-14 ' alt="Not Found" />
        <h2 className='name-text sm:text-xl'>hashim dev</h2>
      </div>
      <div className='hidden sm:block'>
        <div className='name-text   w-150 h-12 flex justify-center items-center z-50'>
          <ul className='flex justify-around items-center gap-1 text-xl'>
            <li className=' flex justify-center items-center w-16 cursor-pointer h-11 hover:text-amber-200' ><a href="#">Home</a></li>
            <li className=' flex justify-center items-center w-16 cursor-pointer h-11 hover:text-amber-200'><a href="#about">About</a></li>
            <li className=' flex justify-center items-center w-16 cursor-pointer h-11 hover:text-amber-200' ><a href="#skills">Skills</a></li>
            <li className=' flex justify-center items-center w-16 cursor-pointer h-11 hover:text-amber-200 '><a href="#project">Projects</a></li>
            <li className=' flex justify-center items-center w-16 cursor-pointer h-11 hover:text-amber-200 ' ><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='block sm:hidden'>
        <div onClick={() => setShowsidebar(true)} className=' w-10 h-12 flex justify-center items-center'>
          <FaBarsStaggered />
        </div>
      </div>
      <div className='hidden sm:block'>
        <div className=' name-text  w-20 sm:w-35 h-12 flex justify-center items-center '>
          <button onClick={() => setDarkMode(!darkMode)} className=' btn w-8 h-8 flex justify-center items-center rounded bg-black cursor-pointer'><p className='sp-text'> {darkMode ? "Light" : "Dark"}</p></button>
        </div>
      </div>
      <div className={`absolute mt-121 right-0 overflow-hidden bg-black/80  transition-all ${showsidebar ? 'w-50' : 'max-w-0'}`}>
        <button className=' flex justify-center items-center mt-3 ml-3 w-9 h-9 rounded-full bg-white/20' onClick={() => setShowsidebar()}> <RxCross2 className='w-10 h-5' /> </button>
        <div className='name-text  w-40 h-100 flex justify-center items-center'>
          <ul className='flex flex-col justify-around items-center gap-1 z-20'>
            <li onClick={() => setShowsidebar()} className='flex justify-center items-center gap-3 w-16 cursor-pointer h-11'><span><FaHome /></span><a href="#">Home</a></li>
            <li onClick={() => setShowsidebar()} className=' flex justify-center items-center  gap-3 w-16 cursor-pointer h-11 '><span><MdOutlineRoundaboutRight /></span><a href="#about">About</a></li>
            <li onClick={() => setShowsidebar()} className=' flex justify-center items-center gap-3 w-16 cursor-pointer h-11 '><span><GiSkills /></span><a href="#skills">Skills</a></li>
            <li onClick={() => setShowsidebar()} className=' flex justify-center items-center gap-3 w-16 cursor-pointer h-11 '><span><GoProjectSymlink /></span><a href="#project">Projects</a></li>
            <li onClick={() => setShowsidebar()} className=' flex justify-center items-center gap-3 w-16 cursor-pointer h-11 '><span><FaPhoneAlt /></span><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className=' name-text  w-40 sm:w-35 h-12 flex justify-center items-center  mb-12'>
          <button onClick={() => setDarkMode(!darkMode)} className=' btn w-8 h-8 flex justify-center items-center rounded bg-black cursor-pointer'><p className='sp-text'>{darkMode ? "Light" : "Dark"}</p></button>
        </div>
      </div>
    </div>
  )
}
export default Navbar;
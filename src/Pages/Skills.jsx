import React from 'react'
import '../App.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import bs from '../assets/bootstrap.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import vs from '../assets/vs.png'
import sql from '../assets/sql.png'
import figma from '../assets/figma.png'
const skillsArr = [
    {
        id: 1,
        image: html,
        name: 'HTML5'
    },
    {
        id: 2,
        image: css,
        name: "CSS3"
    },
    {
        id: 3,
        image: js,
        name: "JavaScript"
    },
    {
        id: 4,
        image: react,
        name: "React JS"
    },
    {
        id: 5,
        image: bs,
        name: "Bootstrap"
    },
    {
        id: 6,
        image: git,
        name: "Git"
    },
    {
        id: 7,
        image: github,
        name: "GitHub"
    },
    {
        id: 8,
        image: tailwind,
        name: "Tailwind CSS"
    },
    {
        id: 9,
        image: vs,
        name: "VS Code"
    },
    {
        id: 10,
        image: sql,
        name: "My SQL"
    },
    {
        id: 11,
        image: figma,
        name: "Figma"
    }
]

const Skills = () => {
    return (
        <div className='w-full h-530 sm:w-full sm:h-185 mt-7 sm:mt-10 px-3 sm:px-5 py-5 sm:py-5'>
            <div className='w-full h-51 sm:w-full sm:h-60 px-1 sm:px-2 py-2 sm:py-3'>
                <h2 data-aos='fade-up' data-aos-delay='300' className=' name-text text-xl  sm:text-2xl  w-full h-10 sm:w-full sm:h-14  flex justify-center items-center'>TECHNICAL SKILLS</h2>
                <h1 data-aos='fade-up' data-aos-delay='400' className=' N-txt text-2xl  sm:text-5xl md:text-6xl lg:text-7xl   w-full h-15 sm:w-full sm:h-23 flex justify-center items-center' >Technologies I Work With</h1>
                <p data-aos='zoom-in' data-aos-delay='450' className='skill-banner    bg-amber-100 text-amber-900 flex justify-center items-center  mt-2 sm:mt-3 text-center' >A curated toolkit of languages, frameworks and tools I use to build exceptional products.</p>
            </div>
            <div className='w-full sm:w-full h-[85%] sm:h-[62%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 px-1 py-2.5 sm:px-2 sm:py-1 '>
                {
                    skillsArr.map((item) => (
                        <div data-aos='flip-left' key={item.id} className='skill-cards w-70 h-35 bg-[#1E293B]/0 cursor-pointer flex justify-center items-center mx-auto rounded-2xl gap-4'>
                            <img src={item.image} data-aos='fade-in' className='skill-pic  w-18 h-18' alt="" />
                            <h2>{item.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills
import React from 'react'
import marchx from '../assets/myofficialmarch.png'

 const footerlinks =[
        {
            id:1,
            a:<a href="#hero">Home</a>
        },
        {
            id:2,
          a:<a href="#about">About</a>
        },
        {
            id:3,
            a: <a href="#skills">Skills</a>
        },
        {
            id:4,
           a: <a href="#project">Projects</a>
        },
        {
            id:5,
            a: <a href="#contact">Contact</a>
        },
    ]
 const footerlink =[
       
        {
            id:2,
            a: <a target='_blank' href="https://www.linkedin.com/in/hashim-mughal-2185113b1">LinkedIn</a>
        },
      
    ]

function footer() {
  return (
    <div className='bg-black/30 mt-26  sm:mt-76'>
        <div className='line bg-linear-to-r from-black/10 to-amber-300  flex justify-center items-center'></div>
        <div className='container mx-auto'>
<div className='grid md:grid-cols-3 pb-4 pt-5'>
    {/* dtils */}
    <div className='py-8 px-4'>
        <h1 className=' hero-text font-semibold text-xl sm:text-3xl flex text-justify items-center mb-3 gap-3'>
            HM
        </h1>
        <p className='name-text text-2xl w-66'>FrontEnd Developer
crafting modern digital experiences with
passion and precision.</p>
       <p className='text-4xl font-bold text-red-600 mt-10'></p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
        <div>
            <div className='py-8 px-4'>
                <h1 className='name-text font-bold text-xl sm:text-left flex text-justify items-center mb-3'>Quick Links</h1>
                <ul className='flex flex-col gap-3'>
                    {
                        footerlinks.map((links)=>(
                          <li key={links.id} className='name-text cursor-pointer  hover:translate-x-1 duration-300 text-gray-500'>
                             <span>{links.a}</span>
                          </li>  
                        ))
                    }
                </ul>
            </div>
        </div>
        <div>
            <div className='py-8 px-4'>
                <h1 className='name-text font-bold text-xl sm:text-left flex text-justify items-center mb-3'>Connect  with me </h1>
                <ul className='flex flex-col gap-3'>
                    {
                        footerlink.map((link)=>(
                          <li key={link.id} className='name-text cursor-pointer hover:translate-x-1 duration-300 text-gray-500'>
                             <span>{link.a}</span>
                          </li>  
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
        {/* social */}
</div>
        <div className='line bg-linear-to-r from-black/10 to-amber-300  flex justify-center items-center'></div>

        <div className='h-30 sm:w-[80%] sm:h-25 mx-auto '>
            <div className="sm:flex sm:justify-between sm:items-center sm:w-240">
        
                 <p className='b-txt mt-2 sm:mt-0 ml-3 sm:ml-0  name-text '>© 2026 Hashim Mughal. All rights reserved.</p>
    
                 <p className='c-txt mt-5 sm:mt-0 ml-3 sm:ml-0  name-text flex justify-center items-center'>Designed & Developed with <img src={marchx} className='w-12 h-12' alt="" />by Hashim Mughal</p>
            
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default footer
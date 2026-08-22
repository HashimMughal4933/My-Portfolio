import React from 'react'
import { useState } from 'react';
import robo from '../assets/robo.png'
import emailjs from '@emailjs/browser';

emailjs.init("gw5CObfL9hwogfDdu")

const Contact = () => {

  const [status, setstatus] = useState('')
  const [sending, setsending] = useState(false)

  const handlesubmit = (e) => {
    e.preventDefault();
    setsending(true)
    setstatus("")

    emailjs.sendForm(
        "service_62narwg",
        "template_eleuzze",
        e.target,
      )

      .then(
        (result) => {
          setstatus('success')
          setTimeout(() => {
            setstatus('')
          }, 5000);

          setsending(false)
          e.target.reset();
        },
        (error) => {
          setstatus('error')
          setTimeout(() => {
            setstatus('')
          }, 5000);
          setsending(false)

        }
      );
  };
  return (
    <div className='w-full h-205 sm:w-full sm:h-200'>

      <div className='w-full h-51 sm:w-full sm:h-60 px-1 sm:px-2 py-2 sm:py-3'>
        <h2 data-aos='fade-up' data-aos-delay='300' className=' name-text text-xl  sm:text-2xl  w-full h-10 sm:w-full sm:h-14  flex justify-center items-center'>GET IN TOUCH</h2>
        <h1 data-aos='fade-up' data-aos-delay='400' className=' N-txt text-2xl  sm:text-5xl md:text-6xl lg:text-7xl   w-full h-15 sm:w-full sm:h-23 flex justify-center items-center' >Let's Work Together</h1>
        <p data-aos='zoom-in' data-aos-delay='450' className=' text-amber-900 flex justify-center items-center  mt-2 sm:mt-3 text-center' >Have a project in mind or just want to say hello? I'd love to hear from you.</p>

      </div>


      <div data-aos='fade-up' data-aos-delay='600' className=' w-full h-164 sm:w-full sm:h-150 flex flex-col sm:flex-row justify-betwen items-center sm:gap-2 sm:px-2'>

        <div className=' w-80 h-100 sm:w-150 sm:h-120 rounded-2xl flex justify-center items-center'>
          <img src={robo} alt="" />
        </div>

        <div data-aos='fade-up' data-aos-delay='800' className=' my-contactcard  btn-1 w-80 h-190 sm:w-[40%] sm:h-120 flex flex-col items-center py-1 px-1 rounded-2xl'>
          <h1 className='name-text rounded-t-2xl w-full  flex justify-center items-center text-3xl bg-white '>Lets Talk</h1>

          <div>

            <form onSubmit={handlesubmit}>

              <div className='w-80 sm:w-105 mt-3 sm:mt-6  h-10 flex items-center '>
                <label className='name-text ml-3  sm:text-2xl'>Name:</label>
                <input className=' btn-1  ml-4 w-60 h-8 sm:w-105 bg-black/10 rounded-full px-3 text-2xl'
                  type="text"
                  name='from_name'
                  placeholder="Your Name" required
                />
              </div>

              <div className=' sm:w-105 h-10  mt-5 flex items-center '>
                <label className='name-text ml-3  sm:text-2xl'>Email:</label>
                <input className=' btn-1 ml-4 w-60 h-8  sm:w-105  bg-black/10 rounded-full px-3'
                  type="email"
                  name='reply_to'
                  placeholder="Your Email" required
                />
              </div>

              <div className='mt-5 sm:w-105 h-10 flex items-center '>
                <label className='name-text ml-3 sm:text-2xl'>Subject:</label>
                <input className='btn-1  ml-2 w-60 h-8 sm:w-105 bg-black/10 rounded-full px-3'
                  type="text"
                  name='title'
                  placeholder="Subject"
                />

              </div>

              <div className='mt-15  sm:mt-5 w-80 sm:w-105 h-10 flex items-center '>
                <textarea className='btn-1  ml-5 sm:mt-28 rounded-2xl w-70 h-25 sm:w-105 sm:h-40 px-3 py-4'
                  name='message'
                  placeholder="Your Message" required
                ></textarea>
              </div>

              <div className='ml-10 mb-5 sm:ml-70 mt-20 sm:mt-35'>

                <button type='Submit' disabled={sending} className='btn-1     w-58 sm:w-28 h-11 flex justify-center items-center rounded-full bg-black cursor-pointer'> <p className='T'>{sending ? "Sending..." : "Send Message"}</p></button>

              </div>
       <div className='w-60 h-10 -mt-25 ml-10 sm:ml-0 sm:-mt-10  z-40 absolute'>
              {status === "success" && (
                <p className='flex justify-center items-center text-white rounded-2xl'>Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className='flex justify-center items-center text-red-500 rounded-2xl'>Message not sent , there is network issue</p>
              )}
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
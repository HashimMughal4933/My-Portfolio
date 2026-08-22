import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css';

const Loader = ({ setLoading }) => {
    const [counter, setcounter] = useState(0)

    useEffect(() => {

        let interval = setInterval(() => {
            setcounter((prev) => {
                if (prev < 100) {
                    return prev + 1;
                }
                else {
                    clearInterval(interval);
                    setTimeout(() => {
                    setLoading(false)
                    },1150);
                    return prev;
                }
            })
        }, 60)
    }, [])

    return (
        <div className='h-svh flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center  Load text-white w-full sm:w-full sm:h-142.5'>
            <p className="text-zinc-500 uppercase tracking-[12px] text-xs font-extralight">
                LOADING
            </p>
            <h1 className="text-white text-1xl mb-4 mt-4 font-extrabold tracking-tighter">
                {counter}%
            </h1>
            {/* loader  */}
            <div className="w-50 sm:w-80 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-white rounded-full transition-all ease duration-50"
                    style={{ width: `${counter}%`}}
                ></div>
            </div>
        </div>
        </div>
    )
}

export default Loader
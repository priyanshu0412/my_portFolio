"use client"
import React, { useState } from 'react'
import { HeroSectionData } from '../../../data'
import { Fade } from "react-awesome-reveal";

// --------------------------------

const HeroSection = () => {

    const [data, setData] = useState(HeroSectionData)

    return (
        <div className='flex items-center justify-center py-20'>
            <Fade direction='up' triggerOnce={true} >
                <div className='w-full lg:w-full max-w-[1200px] flex flex-col justify-center items-center gap-y-8 px-8 '>
                    {
                        data && data.map((ele, index) => {
                            return (
                                <>
                                    <div>
                                        <p className='text-white text-3xl lg:text-5xl font-bold leading-9 lg:leading-[60px] tracking-wider text-center font-poppins'>{ele.title} <span className='text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'> {ele.colorText} </span></p>
                                    </div>
                                    <div>
                                        <p className='text-justify lg:text-center text-[#b2b3b3] text-base lg:text-lg'>{ele.desc}</p>
                                    </div>
                                </>
                            )
                        })

                    }
                    <div className='flex gap-x-4 lg:gap-x-8'>
                        <button className='text-[#000] bg-[#b2b3b3] px-4 lg:px-6 lg:py-3 rounded-full hover:bg-[#ffffffc0]'>Download Resume</button>
                        <button className='border-2 border-[#b2b3b3] text-[#b2b3b3] px-6 py-3 rounded-full'>Contact</button>
                    </div>
                </div>
            </Fade >
        </div>
    )
}

export default HeroSection

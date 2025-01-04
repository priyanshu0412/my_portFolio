"use client"
import React, { useEffect, useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { FetchApi } from '@/utils';

// --------------------------------

const HeroSection = () => {

    const [data, setData] = useState([])

    const apiFetching = async () => {
        const getData = await FetchApi({
            url: "/hero-sections",
            method: "get",
            query: "populate=*"
        }).then((res) => res?.data)

        setData(getData)
    }
    useEffect(() => {
        apiFetching()
    }, [])

    return (
        <div className='flex items-center justify-center w-full py-20'>
            <Fade duration={1000} direction='up' triggerOnce={true} >
                <div className='w-full max-w-[1200px] flex flex-col justify-center items-center gap-y-8 px-8'>
                    {
                        data && data.map((ele, index) => {
                            return (
                                <div className='flex flex-col w-full gap-y-8' key={index}>
                                    <div>
                                        <p className='text-white text-3xl lg:text-5xl font-bold leading-9 lg:leading-[60px] tracking-wider text-center font-poppins'>
                                            {ele?.title}
                                            <span className='text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'> {ele?.spanTitle}
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-justify lg:text-center text-[#b2b3b3] text-base lg:text-lg'>{ele?.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='flex items-center w-full gap-x-2 justify-evenly lg:justify-center lg:gap-x-8'>
                        <button className='text-[#000] bg-[#b2b3b3] px-4 py-3 lg:px-6 lg:py-3 rounded-full hover:bg-[#ffffffc0]'>
                            Download Resume
                        </button>
                        <button className='border-2 hover:text-white hover:border-white border-[#b2b3b3] text-[#b2b3b3]  py-3 px-4 lg:px-6 lg:py-3 rounded-full'>
                            Contact
                        </button>
                    </div>
                </div>
            </Fade >
        </div>
    )
}

export default HeroSection

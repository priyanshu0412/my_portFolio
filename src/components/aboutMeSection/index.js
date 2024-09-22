"use client"
import { codingAvatar } from '@/assests'
import Image from 'next/image'
import React from 'react'
import { Fade } from "react-awesome-reveal";

// -------------------------------------

const AboutMeSection = () => {
    return (
        <div className='flex items-center justify-center w-full py-20 h-[600px] px-8'>
            <div className='w-full xl:max-w-[1400px] flex flex-col xl:flex-row h-full justify-evenly'>
                <Fade direction='left' triggerOnce={true}>
                    <div className='w-full xl:w-[650px] h-full flex flex-col gap-y-8 justify-center'>
                        <div>
                            <p className='text-4xl xl:text-5xl font-bold leading-9 xl:leading-[60px] tracking-wider text-transparent cursor-pointer font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'> About Me </p>
                        </div>
                        <div className='flex flex-col gap-y-12 xl:gap-y-6'>
                            <p className='xl:text-lg text-[#b2b3b3] font-poppins text-justify xl:text-justify'>
                                Hi! I’m Priyanshu Agrawal, a passionate full-stack developer specializing in the MERN stack. With a deep love for coding, I enjoy creating dynamic, user-friendly web applications. I’ve worked on various web development projects, from small-scale apps to more complex systems, leveraging my strong grasp of React for building interactive UIs, and using Node.js and Express to create efficient backend systems.
                            </p>
                            <p className='xl:text-lg text-[#b2b3b3] font-poppins text-justify xl:text-justify'>
                                My journey into web development began with a curiosity to understand how websites work, which soon turned into a passion. As I continue to grow as a developer, I’m excited to explore new technologies and create impactful solutions for real-world challenges.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade direction='right' triggerOnce={true}>
                    <div className='w-full h-full xl:w-[600px] flex justify-center items-center'>
                        <Image src={codingAvatar} alt='...' width={600} height={500} className='object-cover w-full h-full rounded-xl' />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default AboutMeSection

"use client"
import React, { useState } from 'react'
import ProjectCard from './projectCard'
import { ProjectData } from '../../../data'
import { Fade } from "react-awesome-reveal";
// -----------------------------------------------

const ProjectSection = () => {

    const [data, setData] = useState(ProjectData)

    return (
        <>
            <div className='flex items-center justify-center w-full py-20' id='Project'>
                <Fade direction='up' triggerOnce={true} duration={1000}>
                    <div className='max-w-[1400px] px-8 flex flex-col justify-center items-center gap-y-12 w-full'>
                        <div className='flex flex-col items-center justify-center w-full lg:w-[50%] gap-y-6'>
                            <p className='text-3xl font-bold tracking-wide text-white lg:text-5xl font-poppins'>Latest Projects</p>
                            <p className='text-[#b2b3b3] text-justify lg:text-center font-poppins'>Check out my latest MERN stack project with a dynamic UI, smooth API integration, and efficient data handling for a seamless user experience</p>
                        </div>
                        <div className='flex flex-col w-full pt-12 lg:justify-center lg:flex-row lg:flex-wrap lg:gap-x-14 2xl:gap-x-28 gap-y-16'>
                            {
                                data && data.map((ele, index) => {
                                    return (
                                        <div key={index} >
                                            <ProjectCard data={ele} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Fade triggerOnce={true} duration={1000} direction='up' className='w-full'>
                            <div className='flex items-center justify-center w-full pt-12 '>
                                <button className='border-2 border-[#b2b3b3] text-[#b2b3b3] px-6 py-3 rounded-full hover:text-white'>View All</button>
                            </div>
                        </Fade>
                    </div>
                </Fade>
            </div >
        </>
    )
}

export default ProjectSection

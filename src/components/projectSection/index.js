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
            <div className='flex items-center justify-center w-full px-8 py-20 '>
                <Fade direction='up' triggerOnce={true} duration={1000} >
                    <div className='flex items-center justify-center max-w-[1400px] flex-col gap-y-8'>
                        <div className='w-full lg:w-[50%] flex justify-center items-center flex-col gap-y-8 lg:gap-y-6'>
                            <p className='text-3xl font-bold tracking-wide text-white lg:text-5xl font-poppins'>Latest Projects</p>
                            <p className='text-[#b2b3b3] text-justify lg:text-center font-poppins'>Explore my latest MERN stack project featuring a dynamic UI, seamless API integration, and efficient data handling—crafted to deliver a robust user experience.</p>
                        </div>
                        <div className='flex flex-wrap justify-center w-full gap-12 pt-10 text-white lg:gap-y-24 lg:pt-12'>
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
                        <Fade direction='up' triggerOnce={true}>
                            <div className='pt-12'>
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

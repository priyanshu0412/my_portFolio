"use client"
import React, { useState } from 'react'
import { SkillsSectionData } from '../../../data'
import SkillSectionCard from './skillSectionCard'
import { Fade } from 'react-awesome-reveal'

// ------------------------------------------

const SkillsSection = () => {

    const [skillData, setskillData] = useState(SkillsSectionData)

    return (
        <div id='Skills' className='flex items-center justify-center w-full py-20 text-white'>
            <div className='max-w-[1400px] flex justify-center px-8 flex-col items-center gap-y-8 w-full'>
                <div className='w-full lg:w-[50%] flex justify-center flex-col items-center gap-y-8'>
                    <Fade duration={1000} direction='up' triggerOnce={true}>
                        <p className='text-3xl font-bold tracking-wide text-transparent cursor-pointer lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>Skills</p>
                        <p className='text-justify lg:text-center text-[#b2b3b3] font-poppins'>I specialize in building robust web applications using the MERN stack, focusing on efficiency, scalability, and user-friendly solutions. Key technologies powering my projects include:</p>
                    </Fade>
                </div>
                <div className='flex flex-col justify-start w-full gap-x-8'>
                    {
                        skillData && skillData?.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <SkillSectionCard data={ele} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillsSection

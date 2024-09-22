"use client"
import React, { useState } from 'react'
import { SkillsSectionData } from '../../../data'
import SkillSectionCard from './skillSectionCard'

// ------------------------------------------

const SkillsSection = () => {

    const [skillData, setskillData] = useState(SkillsSectionData)

    return (
        <div className='flex items-center justify-center w-full px-8 py-20 text-white'>
            <div className='w-full lg:max-w-[1300px] flex justify-center flex-col items-center gap-y-8'>
                <div className='w-full lg:w-[50%] flex justify-center flex-col items-center gap-y-8'>
                    <p className='text-3xl font-bold tracking-wide text-transparent cursor-pointer lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>Skills</p>
                    <p className='text-justify lg:text-center text-[#b2b3b3] font-poppins'>I showcase my core competencies and the technologies that I leverage to build robust web applications. With expertise in the MERN stack, I focus on creating efficient, scalable, and user-friendly solutions. Here are the key technologies that power my projects:</p>
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

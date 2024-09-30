"use client"
import { Icon } from '@iconify/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

// --------------------------------------

const SkillSectionCard = ({ data }) => {
    return (
        <Fade duration={1000} direction='up' triggerOnce={true}>
            <div className='flex flex-col items-center w-full py-12 lg:flex-row gap-y-8 lg:gap-y-0 '>
                <Fade duration={1000} direction='up' triggerOnce={true}>
                    <div className='w-full lg:w-[500px] h-full lg:pl-12'>
                        <p className='text-2xl font-bold tracking-wider font-poppins'>{data.name}</p>
                    </div>
                    <div className='flex flex-wrap justify-center w-full gap-8 lg:pl-10 lg:justify-start'>
                        {
                            data?.data?.map((ele, index) => {
                                return (
                                    <div key={index} className='cursor-pointer justify-center items-center w-fit rounded-xl border-2 border-[#b2b3b3] p-2 flex gap-x-4'>
                                        <Icon icon={ele?.iconName} width={30} height={30} />
                                        <p className='font-poppins'>{ele?.skillName}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Fade>
            </div>
        </Fade>
    )
}

export default SkillSectionCard

"use client"
import Icon from '@/components/icon'
import Image from 'next/image'
import React from 'react'

// ------------------------------------------

const ProjectCard = ({ data }) => {


    return (
        <div className='w-full lg:w-[450px] xl:w-[580px] 2xl:w-[600] flex flex-col gap-y-6'>
            <div className='overflow-hidden transition-transform duration-300 rounded-lg hover:scale-105'>
                <Image src={data?.projectImg} alt='...' width={300} className='object-cover w-full h-full' />
            </div>

            <div className='flex flex-col gap-y-4'>
                <p className='text-2xl font-poppins'>{data?.projectTitle}</p>
                <p className='font-poppins text-[#B2B3B3]'>{data?.projectDesc}</p>
            </div>
            <div>
                <button className='flex items-center justify-center font-poppins gap-x-2 hover:underline'>
                    View Project <Icon icon={"ph:arrow-up-right-light"} height={20} width={20} />
                </button>
            </div>
        </div>
    )
}

export default ProjectCard

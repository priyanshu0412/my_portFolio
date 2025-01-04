"use client"
import Icon from '@/components/icon'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Fade } from "react-awesome-reveal";

// ------------------------------------------

const ProjectCard = ({ data }) => {

    return (
        <Fade duration={1000} direction='up' triggerOnce={true}>
            <div className='w-full lg:w-[450px] xl:w-[580px] 2xl:w-[600] flex flex-col gap-y-6'>
                <div className='overflow-hidden transition-transform duration-300 rounded-lg hover:scale-105'>
                    <Image
                        src={data?.img}
                        alt='...'
                        width={300}
                        height={300}
                        className='object-cover w-full h-full' />
                </div>

                <div className='flex flex-col gap-y-4'>
                    <p className='text-2xl font-poppins text-[#B2B3B3]'>
                        {data?.title}
                    </p>
                    <p className='font-poppins text-[#B2B3B3]'>
                        {data?.short_desc}
                    </p>
                </div>
                <div>
                    <Link href={`/project/${data?.slugURL}`}>
                        <button className='flex items-center justify-center text-[#B2B3B3] font-poppins gap-x-2 hover:underline'>
                            View Project
                            <Icon
                                icon={"ph:arrow-up-right-light"}
                                height={20}
                                width={20} />
                        </button>
                    </Link>
                </div>
            </div>
        </Fade>
    )
}

export default ProjectCard

import { ProjectImg } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Icon from '../icon'

// ------------------------------

const SpecificProjectPage = () => {
    return (
        <>
            <div className='flex items-center justify-center w-full py-20'>
                <div className='max-w-[1300px] flex flex-col justify-center  gap-y-20 w-full'>
                    <div className='flex items-start justify-center gap-x-8'>
                        <div className='flex flex-col gap-y-8 w-[50%] h-full'>
                            <h2 className='text-5xl font-bold text-white'>
                                Project Name
                            </h2>
                            <p className='text-[#b2b3b3]'>Category</p>
                            <div className='flex flex-col gap-y-8'>
                                <h2 className='text-xl font-semibold text-white'>
                                    Technology Stack
                                </h2>
                                <div className='flex flex-wrap w-full gap-8'>
                                    <div className='flex items-center justify-center px-4 py-3 rounded-full gap-x-4 backdrop-blur-xl bg-white/20 w-fit'>
                                        <Icon
                                            icon={"mdi:react"}
                                            className={"text-white"}
                                            height={24}
                                            width={24} />
                                        <p className='text-white'>React js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <Image
                                src={ProjectImg}
                                height={500}
                                width={500}
                                alt='...'
                                className='!w-full !h-auto rounded-xl hover:scale-105 transition-all ease-linear duration-300' />
                        </div>
                    </div>
                    <div>
                        <p className='text-white'>desc</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SpecificProjectPage

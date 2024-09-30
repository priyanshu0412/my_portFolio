"use client"
import React, { useState } from 'react'
import { AboutMeSectionData } from '../../../data'
import { Icon } from '@iconify/react'

// ----------------------------------------------

const Footer = () => {

    const [socialData, setSocialData] = useState(AboutMeSectionData)

    return (
        <>
            <div className='bottom-0 flex items-center justify-center w-full py-20'>
                <div className=' max-w-[1300px] flex-col px-8 flex justify-center items-center border-red w-full'>
                    <div className='flex flex-col w-full lg:flex-row justify-evenly'>
                        <div className='flex flex-col w-full gap-y-4 lg:w-fit'>
                            <div>
                                <p className="text-3xl font-bold tracking-wider text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text font-poppins">
                                    Priyanshu
                                </p>
                            </div>
                            <div>
                                <p className='font-poppins text-[#b2b3b3]'>Join our newsletter to stay up to date on features and releases.</p>
                            </div>
                            {/* Newsletter  */}
                            <div className='flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-4'>
                                <input type="email" placeholder='Enter Email' className='font-poppins text-white p-4 bg-transparent border-2 rounded-xl w-full lg:w-80 border-[#b2b3b3]' />
                                <button className='text-[#b2b3b3] border-[1px] border-[#b2b3b3] rounded-full px-4 py-2 font-poppins w-full lg:w-fit '>
                                    Subscribe
                                </button>
                            </div>
                            <div className='flex w-full pt-12 gap-x-8 lg:w-fit justify-evenly'>
                                <p className='text-[#b2b3b3] underline cursor-pointer font-poppins'>Privacy Policy</p>
                                <p className='text-[#b2b3b3] underline cursor-pointer font-poppins'>Terms of Service</p>
                            </div>
                        </div>
                        <div className='flex justify-around w-full pt-16 lg:pt-0 lg:justify-evenly'>
                            <div className='flex flex-col w-fit gap-y-8 [&>p]:font-poppins'>
                                <p className='font-extrabold text-white'>Pages</p>
                                <p className='text-[#b2b3b3]'>Home</p>
                                <p className='text-[#b2b3b3]'>Contact</p>
                                <p className='text-[#b2b3b3]'>Login</p>
                                <p className='text-[#b2b3b3]'>Signup</p>
                            </div>
                            <div className='flex flex-col w-fit gap-y-8 '>
                                <div>
                                    <p className='font-extrabold text-white font-poppins'>Follow Me </p>
                                </div>
                                <div className='flex flex-col justify-center gap-y-8'>
                                    {
                                        socialData.length > 0 && socialData[0].socialLink.map((ele, index) => {
                                            return (
                                                <div key={index} className='flex items-center cursor-pointer gap-x-4'>
                                                    <Icon icon={ele.icon} height={20} width={20} className='text-white' />
                                                    <p className='text-[#b2b3b3]'>{ele.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-20'>
                        <p className='text-[#b2b3b3] font-poppins'>&copy; 2024 Priyanshu All Right Reserved </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

"use client"
import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ------------------------------------

const ContactMe = () => {
    return (
        <div className='flex items-center justify-center w-full min-h-screen' >
            <div className='w-full py-20 max-w-[1200px] px-8 gap-y-16 flex flex-col justify-center items-center'>
                <Fade direction='up' triggerOnce={true} duration={1000} className='w-full' >
                    <div className='flex flex-col items-center justify-center gap-y-4'>
                        <p className='text-3xl font-bold tracking-wide text-transparent cursor-pointer lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>
                            Contact Me
                        </p>
                        <p className='text-[#b2b3b3] font-poppins text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque.
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full gap-y-4 lg:gap-y-10 '>
                        <div className='flex flex-col justify-center w-full lg:flex-row gap-x-8 gap-y-4 lg:gap-y-0'>
                            <div className='flex flex-col gap-y-2 w-full lg:w-[40%]'>
                                <p className='text-[#b2b3b3]'>
                                    First name
                                </p>
                                <input type="text" className='bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white' />
                            </div>
                            <div className='flex flex-col gap-y-2 w-full lg:w-[40%]'>
                                <p className='text-[#b2b3b3]'>
                                    Last name
                                </p>
                                <input type="text" className='bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white' />
                            </div>
                        </div>
                        <div className='flex flex-col justify-center w-full lg:flex-row gap-x-8 gap-y-4 lg:gap-y-0'>
                            <div className='flex flex-col gap-y-2 w-full lg:w-[40%]'>
                                <p className='text-[#b2b3b3]'>
                                    Email
                                </p>
                                <input type="text" className='bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white' />
                            </div>
                            <div className='flex flex-col gap-y-2 w-full lg:w-[40%]'>
                                <p className='text-[#b2b3b3]'>
                                    Phone
                                </p>
                                <input type="text" className='bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white' />
                            </div>
                        </div>
                        <div className='flex justify-center w-full gap-x-8'>
                            <div className='flex flex-col gap-y-2 w-full lg:w-[83%]'>
                                <p className='text-[#b2b3b3]'>
                                    Message
                                </p>
                                <textarea type="text" rows={6} placeholder='Type your message ... ' className='bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-4 rounded-lg w-full text-white' />
                            </div>
                        </div>
                        <div className='pt-10 w-fit lg:pt-0'>
                            <button className='text-[#000] bg-[#b2b3b3] px-6 py-4 rounded-full hover:bg-[#ffffffc0]'>
                                Submit
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>
        </div >
    )
}

export default ContactMe

"use client"
import React, { Fragment, useState } from 'react'
import { Navbar_data } from '../../../data'
import Link from 'next/link'
import MobileNavbar from '../mobileNavbar'
import Icon from '../icon'

// ---------------------------------

const Navbar = () => {

    const [navbar, setNavbar] = useState(Navbar_data)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <>
            <div className='relative w-full'>
                <div className='items-center justify-between hidden w-full h-20 px-16 lg:flex'>
                    <div>
                        <Link className='w-fit' href={"/"}>
                            <p className="text-2xl font-bold tracking-wider text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text font-poppins">
                                Priyanshu
                            </p>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-8'>
                        {
                            navbar.map((ele, index) => {
                                return (
                                    <Link href={ele.name === "Home" ? "/" : `/#${ele.name}`} key={index} className='w-fit'>
                                        <p
                                            className="text-[#d9d9d9] hover:text-white font-normal font-poppins cursor-pointer">
                                            {ele.name}
                                        </p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className='flex items-center justify-center h-full'>
                        {/* <Link className='w-fit' href={"/contact"}>
                        <button className='text-[#000] bg-[#b2b3b3] px-6 py-2 rounded-full hover:bg-[#ffffffc0]'>
                            Get In Touch
                        </button>
                    </Link> */}
                        <Link className='w-fit' href={"/my-account"}>
                            <button
                                className='flex items-center justify-center px-6 py-2 text-white bg-black hover:text-black hover:bg-[#B2B3B3] rounded-xl gap-x-2 backdrop-blur-lg bg-opacity-40'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                                My Account
                                <Icon icon={"mingcute:down-line"} height={25} width={25} />
                            </button>
                        </Link>
                    </div >
                </div >
                {isHovered && (
                    <div className='hidden lg:block w-[350px] h-[200px] bg-white backdrop-blur-lg bg-opacity-20 absolute z-50 right-16 rounded-xl p-4'>
                        {/* First Section  */}
                        <div className='flex items-end justify-between w-full pb-4 gap-x-4'>
                            <div className='flex items-center justify-between gap-x-4'>
                                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-xs text-[#b2b3b3]'>
                                        My acoount
                                    </p>
                                    <div className='flex items-center justify-center text-white gap-x-2'>
                                        <p>prince@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <Link className='w-fit' href={"/my-account"}>
                                <div className='flex items-center justify-center px-2 py-1 text-white bg-black rounded-lg cursor-pointer co bg-opacity-40 gap-x-2'>
                                    Edit <Icon icon={"lucide:edit"} height={15} width={15} />
                                </div>
                            </Link>
                        </div>
                        {/* Black Line  */}
                        <span className='block h-[1px] w-full bg-white'></span>
                        <div className='flex flex-col justify-between py-6 gap-y-5'>
                            {/* Settings  */}
                            <Link className='w-fit' href={"/settings"}>
                                <div className='flex items-center text-white cursor-pointer gap-x-2 w-fit'>
                                    <Icon icon={"weui:setting-outlined"} height={25} width={25} />
                                    <p className='text-lg '>
                                        Settings
                                    </p>
                                </div>
                            </Link>
                            {/* Logout  */}
                            <div className='flex items-center text-white cursor-pointer gap-x-2 w-fit'>
                                <Icon icon={"material-symbols:logout-rounded"} height={25} width={25} />
                                <p className='text-lg '>
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
            <MobileNavbar />
        </>
    )
}

export default Navbar

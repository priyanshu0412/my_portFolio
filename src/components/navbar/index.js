"use client"
import React, { Fragment, useState } from 'react'
import { Navbar_data } from '../../../data'
import Link from 'next/link'
import MobileNavbar from '../mobileNavbar'

// ---------------------------------

const Navbar = () => {

    const [navbar, setNavbar] = useState(Navbar_data)

    return (
        <>
            <div className='items-center justify-between hidden h-20 px-16 lg:flex '>
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
                                <Link href={ele.name === "Home" || ele.name === "Portfolio" ? "/" : `/#${ele.name}`} key={index} className='w-fit'>
                                    <p
                                        className="text-[#d9d9d9] font-normal font-poppins cursor-pointer">
                                        {ele.name}
                                    </p>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center'>
                    <Link className='w-fit' href={"/contact"}>
                        <button className='text-[#000] bg-[#b2b3b3] px-6 py-2 rounded-full hover:bg-[#ffffffc0]'>
                            Get In Touch
                        </button>
                    </Link>
                </div >
            </div >
            <MobileNavbar />
        </>
    )
}

export default Navbar

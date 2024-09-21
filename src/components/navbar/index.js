"use client"
import React, { Fragment, useState } from 'react'
import { Navbar_data } from '../../../data'

// ---------------------------------

const Navbar = () => {

    const [navbar, setNavbar] = useState(Navbar_data)

    return (
        <div className='items-center justify-between hidden h-20 px-16 lg:flex '>
            <div>
                <p className="text-2xl font-bold tracking-wider text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text font-poppins">
                    Priyanshu
                </p>
            </div>
            <div className='flex items-center justify-center gap-8'>
                {
                    navbar.map((ele, index) => {
                        return (
                            <p
                                className="text-[#d9d9d9] font-normal font-poppins cursor-pointer" key={index}
                            >
                                {ele.name}
                            </p>
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center'>
                <button className='text-[#000] bg-[#b2b3b3] px-6 py-2 rounded-full'>
                    Get In Touch
                </button>
            </div >
        </div >
    )
}

export default Navbar

'use client';
import React, { useState } from 'react';
import Icon from '../icon';
import { Navbar_data } from '../../../data';

// ------------------------------------

const MobileNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(Navbar_data)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
    console.log("isMenuOpen", isMenuOpen)

    return (
        <>
            <div className='flex items-center justify-between h-16 p-4 lg:hidden'>
                <div>
                    <p className="text-2xl font-bold tracking-wider text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text font-poppins">
                        Priyanshu
                    </p>
                </div>
                <div onClick={toggleMenu}>
                    <Icon
                        icon={isMenuOpen ? "material-symbols:close" : "jam:menu"}
                        className="text-white cursor-pointer"
                        height={40}
                        width={40}
                    />
                </div>
            </div>
            {
                isMenuOpen && (
                    <div className='z-10 flex flex-col items-center justify-center p-4 gap-y-6'>

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
                        <button className='text-[#000] bg-[#b2b3b3] px-6 py-2 rounded-full'>Get In Touch</button>
                    </div>
                )
            }
        </>
    );
};

export default MobileNavbar;

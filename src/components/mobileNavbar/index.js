'use client';
import React, { useState, useEffect } from 'react';
import Icon from '../icon';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

// ------------------------------------

const MobileNavbar = ({ navbar }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    return (
        <>
            <div className='flex items-center justify-between h-16 p-4 lg:hidden'>
                <div>
                    <Link className='w-fit' href={"/"}>
                        <p className="text-2xl font-bold tracking-wider text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text font-poppins">
                            Priyanshu
                        </p>
                    </Link>
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
                    <div className='z-10 flex flex-col items-center justify-start py-8 px-4 gap-y-8 lg:hidden fixed top-[64px] w-full bg-black h-full'>
                        <Fade duration={1000} direction='up' triggerOnce={true}>
                            {
                                navbar?.length > 0 && navbar.map((ele, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            className='w-fit'
                                            href={ele?.title === "Home" || ele?.title === "Portfolio" ? "/" : `/#${ele?.title}`}
                                            onClick={handleLinkClick}>
                                            <p
                                                className="text-lg text-[#d9d9d9] font-semibold font-poppins cursor-pointer"
                                            >
                                                {ele.title}
                                            </p>
                                        </Link>
                                    )
                                })
                            }
                        </Fade>
                        <Fade duration={1000} direction='up' triggerOnce={true}>
                            <Link className='w-fit' href={"/contact"}>
                                <button className='text-[#000] bg-[#b2b3b3] px-6 py-2 rounded-full' onClick={handleLinkClick}>
                                    Get In Touch
                                </button>
                            </Link>
                        </Fade>
                    </div>
                )
            }
        </>
    );
};

export default MobileNavbar;

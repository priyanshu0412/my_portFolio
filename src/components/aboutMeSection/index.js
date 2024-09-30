"use client"
import { img } from '@/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Icon from '../icon';
import { AboutMeSectionData } from '../../../data';

// -------------------------------------

const AboutMeSection = () => {

    const [socialLinkData, setSocialLinkData] = useState(AboutMeSectionData)

    return (
        <div className='flex items-center justify-center w-full py-20' id='About'>
            <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1400px] gap-y-8 lg:gap-x-8 w-full px-8 xl:px-20'>
                <div className='flex flex-col w-full gap-y-8'>
                    <Fade duration={1000} direction='up' triggerOnce={true}>
                        <div>
                            <p className='text-3xl font-bold tracking-wide text-transparent lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>
                                About Me
                            </p>
                        </div>
                        <div>
                            <p className='font-extrabold tracking-wider text-transparent uppercase lg:text-xl font-poppins bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text'>
                                Priyanshu Agrawal - Full Stack Developer
                            </p>
                        </div>
                        <div>
                            <p className='text-[#b2b3b3] text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet ratione dolorum mollitia magni, dicta expedita rem quisquam saepe quod velit tempora fugiat libero distinctio minus, alias est aspernatur id praesentium nostrum debitis possimus tempore. Tenetur enim a vero nisi optio, neque, quo eligendi corrupti deleniti veniam non tempora eaque.
                            </p>
                        </div>
                        <div className='flex flex-wrap w-full gap-6 p-4'>
                            {
                                socialLinkData?.length > 0 && socialLinkData[0].socialLink.map((ele, index) => (
                                    <Icon key={index} icon={ele.icon} height={30} width={30} className={"text-white"} />
                                ))
                            }
                        </div>
                    </Fade>
                </div>
                <div className='h-[400px] w-full lg:w-[50%] flex justify-center items-center'>
                    <Fade duration={1000} direction='up' triggerOnce={true}>
                        <Image src={img} width={600} className='object-cover w-full h-full' height={400} alt='...' />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection

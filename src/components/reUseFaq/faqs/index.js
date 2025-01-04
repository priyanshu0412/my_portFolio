"use client"
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

// ------------------------------------

const FAQs = ({ data, index }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex items-start justify-between w-full text-white'>
            <div className='flex flex-col gap-y-4 w-[80%]'>
                <p className='text-lg font-bold text-justify lg:text-left'>
                    {index + 1}. {data?.title}
                </p>
                {isOpen && (
                    <p className='text-base text-justify lg:text-left'>
                        {data?.desc}
                    </p>
                )}
            </div>
            <div className='flex '>
                <button onClick={handleToggle}>
                    <Icon
                        icon={isOpen ? "radix-icons:dash" : "lets-icons:add-round"}
                        height={24}
                        width={24}
                    />
                </button>
            </div>
        </div>
    )
}

export default FAQs

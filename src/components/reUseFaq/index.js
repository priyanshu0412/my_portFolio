"use client"
import React, { useEffect, useState } from 'react'
import FAQs from './faqs'
import { FetchApi } from '@/utils'

// ------------------------------------

const ReUseFaq = () => {

    const [faqData, setFaqData] = useState([])

    const apiFetching = async () => {
        const getData = await FetchApi({
            url: "/faqs",
            method: "get",
            query: "populate=*"
        }).then((res) => res?.data)

        setFaqData(getData)
    }

    useEffect(() => {
        apiFetching()
    }, [])

    return (
        <div className='flex items-center justify-center w-full' id='Faqs'>
            <div className='max-w-[1000px] w-full py-10 flex flex-col gap-y-20 justify-center items-center px-8 2xl:px-0'>
                <div>
                    <h2 className='text-3xl font-bold tracking-wide text-transparent cursor-pointer lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>
                        If there is any FAQ here it is.
                    </h2>
                </div>
                <div className='flex flex-col w-full gap-y-8'>
                    {
                        faqData?.length > 0 && faqData?.map((ele, index) => {
                            return (
                                < FAQs
                                    data={ele}
                                    key={index}
                                    index={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ReUseFaq

"use client"
import React, { useEffect, useState } from 'react'
// import { SkillsSectionData } from '../../../data'
import { Fade } from 'react-awesome-reveal'
import SkillSectionWorkTab from './skillSectionWorkTab'
import SkillsWorkSection from './skillsWorkSection'
import { FetchApi } from '@/utils'


const SkillsSection = () => {
    const [tabName, setTabName] = useState("FrontEnd")
    const [technologyWork, setTechnologyWork] = useState([])
    const [mainTechData, setMainTechData] = useState([])

    useEffect(() => {
        const fetchSkills = async () => {
            const query = "populate=*"
            const response = await FetchApi({ url: "/skills", query })
            if (response?.data) {
                setTechnologyWork(response.data)
                // Set initial tech data for the first tab
                const initialTab = response.data.find(ele => ele.title === tabName)
                setMainTechData(initialTab?.technologies || [])
            }
        }

        fetchSkills()
    }, [tabName]) // Refetch if tabName changes

    const handleTechBtnClick = (name, techData) => {
        setTabName(name)
        setMainTechData(techData)
    }

    return (
        <div id='Skills' className='flex items-center justify-center w-full py-20 text-white'>
            <div className='max-w-[1400px] flex justify-center px-8 flex-col items-center gap-y-8 w-full'>
                <div className='w-full lg:w-[50%] flex justify-center flex-col items-center gap-y-8'>
                    <Fade duration={1000} direction='up' triggerOnce={true}>
                        <p className='text-3xl font-bold tracking-wide text-transparent cursor-pointer lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>
                            Skills
                        </p>
                        <p className='text-justify lg:text-center text-[#b2b3b3] font-poppins'>
                            I specialize in building robust web applications using the MERN stack, focusing on efficiency, scalability, and user-friendly solutions. Key technologies powering my projects include:
                        </p>
                    </Fade>
                </div>
                <div className='w-full overflow-x-auto overflow-y-hidden md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-8'>
                    <div className='flex justify-center min-w-full pt-5 text-nowrap w-fit '>
                        {technologyWork?.map((ele, index) => (
                            <div
                                key={index}
                                onClick={() => handleTechBtnClick(ele.title, ele.technologies)}
                            >
                                <SkillSectionWorkTab
                                    tabName={ele.title}
                                    selectedName={tabName}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center w-full '>
                    <div className='flex flex-wrap justify-center items-center gap-y-3 w-full max-w-[1200px]'>
                        {mainTechData?.map((ele, index) => (
                            <div key={index} className='w-[33%] lg:w-[15%]'>
                                <SkillsWorkSection data={ele} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection

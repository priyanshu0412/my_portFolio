import React from 'react'
import "./globals.css"
import { AboutMeSection, HeroSection, MobileNavbar, ProjectSection, SkillsSection } from '@/components'

// ---------------------------------

const Home = () => {
  return (
    <>
      <div className='w-full h-screen animate-moveShadow' >
        <MobileNavbar />
        <HeroSection />
        <ProjectSection />
        <AboutMeSection />
        <SkillsSection />
      </div>
    </>
  )
}

export default Home

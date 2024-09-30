import React from 'react'
import "./globals.css"
import { AboutMeSection, HeroSection, MobileNavbar, ProjectSection, SkillsSection } from '@/components'

// ---------------------------------

const Home = () => {
  return (
    <>
      <MobileNavbar />
      <HeroSection />
      <ProjectSection />
      <AboutMeSection />
      <SkillsSection />
    </>
  )
}

export default Home

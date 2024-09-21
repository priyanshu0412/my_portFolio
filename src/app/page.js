import React from 'react'
import "./globals.css"
import { HeroSection, MobileNavbar, ProjectSection } from '@/components'

// ---------------------------------

const Home = () => {
  return (
    <>
      <div className='w-full h-screen animate-moveShadow'>
        <MobileNavbar />
        <HeroSection />
        <ProjectSection />
      </div>
    </>
  )
}

export default Home

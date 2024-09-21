import React from 'react'
import "./globals.css"
import { HeroSection, MobileNavbar } from '@/components'

// ---------------------------------

const Home = () => {
  return (
    <>
      <div className='w-full h-screen animate-moveShadow'>
        <MobileNavbar />
        <HeroSection />
      </div>
    </>
  )
}

export default Home

import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import HomeCards from '../components/HomeCards'

const HomePage = () => {
  return (
    <>
    <Hero />
    <div className="absolute inset-0 flex flex-col justify-center items-center">
    <HomeCards />
    </div>

    </>
  )
}

export default HomePage

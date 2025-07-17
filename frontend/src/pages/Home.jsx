import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
import HeroSection from '../components/HeroSection'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSection />
      <LatestCollection />
      <BestSeller />
      <Newsletter />
    </div>
  )
}

export default Home

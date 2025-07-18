import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
import HeroSection from '../components/HeroSection'
import Newsletter from './Newsletter'
import CardSwapSection from '../components/CardSwapSection'
import CircularGallery from '../components/CircularGallerySection'

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSection />
      <CircularGallery />
      <LatestCollection />
      <BestSeller />
      <CardSwapSection />
      <Newsletter />
    </div>
  )
}

export default Home

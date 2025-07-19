import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import HeroSection from '../components/HeroSection'
import Newsletter from './Newsletter'
import CardSwapSection from '../components/CardSwapSection'
import CircularGallery from '../components/CircularGallerySection'
import PromoteProducts from '../components/PromoteProducts'

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSection />
      <CircularGallery />
      <LatestCollection />
      <CardSwapSection />
      <BestSeller />
      <PromoteProducts />
      <Newsletter />
    </div>
  )
}

export default Home

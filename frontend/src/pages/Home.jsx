// import React from 'react'
// import Hero from '../components/Hero'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
// import HeroSection from '../components/HeroSection'
// import Newsletter from './Newsletter'
// import CardSwapSection from '../components/CardSwapSection'
// import CircularGallery from '../components/CircularGallerySection'
// import PromoteProducts from '../components/PromoteProducts'

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <HeroSection />
//       <CircularGallery />
//       <LatestCollection />
//       <CardSwapSection />
//       <BestSeller />
//       <PromoteProducts />
//       <Newsletter />
//     </div>
//   )
// }

// export default Home

import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("../components/Hero"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const CircularGallery = lazy(() =>
  import("../components/CircularGallerySection")
);
const LatestCollection = lazy(() => import("../components/LatestCollection"));
const CardSwapSection = lazy(() => import("../components/CardSwapSection"));
const BestSeller = lazy(() => import("../components/BestSeller"));
const PromoteProducts = lazy(() => import("../components/PromoteProducts"));
const Newsletter = lazy(() => import("./Newsletter"));

const Home = () => {
  return (
    <Suspense
      fallback={
        <p className="text-center py-6 text-gray-500">
          Loading something magical... ✨
        </p>
      }
    >
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
    </Suspense>
  );
};

export default Home;

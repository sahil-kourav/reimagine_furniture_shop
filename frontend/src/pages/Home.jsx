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














// import React, { lazy, Suspense } from 'react';

// const Hero = lazy(() => import('../components/Hero'));
// const HeroSection = lazy(() => import('../components/HeroSection'));
// const CircularGallery = lazy(() => import('../components/CircularGallerySection'));
// const LatestCollection = lazy(() => import('../components/LatestCollection'));
// const CardSwapSection = lazy(() => import('../components/CardSwapSection'));
// const BestSeller = lazy(() => import('../components/BestSeller'));
// const PromoteProducts = lazy(() => import('../components/PromoteProducts'));
// const Newsletter = lazy(() => import('./Newsletter'));


// const Home = () => {
//   return (
//     <Suspense fallback={<p className="text-center py-6 text-gray-500">Loading...</p>}>
//       <div>
//         <Hero />
//         <HeroSection />
//         <CircularGallery />
//         <LatestCollection />
//         <CardSwapSection />
//         <BestSeller />
//         <PromoteProducts />
//         <Newsletter />
//       </div>
//     </Suspense>
//   );
// };

// export default Home;

















import React, { lazy, Suspense } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const HeroSection = lazy(() => import('../components/HeroSection'));
const CircularGallery = lazy(() => import('../components/CircularGallerySection'));
const LatestCollection = lazy(() => import('../components/LatestCollection'));
const CardSwapSection = lazy(() => import('../components/CardSwapSection'));
const BestSeller = lazy(() => import('../components/BestSeller'));
const PromoteProducts = lazy(() => import('../components/PromoteProducts'));
const Newsletter = lazy(() => import('./Newsletter'));

const Home = () => {
  return (
    <Suspense fallback={<p className="text-center py-6 text-gray-500">Loading...</p>}>
      <div className="space-y-12">
        <div data-aos="fade-up" data-aos-delay="0">
          <Hero />
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <HeroSection />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="200">
          <CircularGallery />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <LatestCollection />
        </div>

        <div data-aos="zoom-in" data-aos-delay="400">
          <CardSwapSection />
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <BestSeller />
        </div>

        <div data-aos="fade-left" data-aos-delay="600">
          <PromoteProducts />
        </div>

        <div data-aos="fade-up" data-aos-delay="700">
          <Newsletter />
        </div>
      </div>
    </Suspense>
  );
};

export default Home;

import React, { lazy } from "react";
const Hero = lazy(() => import("../components/Hero"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const CircularGallery = lazy(() => import("../components/CircularGallerySection"));
const LatestCollection = lazy(() => import("../components/LatestCollection"));
const CardSwapSection = lazy(() => import("../components/CardSwapSection"));
const BestSeller = lazy(() => import("../components/BestSeller"));
const PromoteProducts = lazy(() => import("../components/PromoteProducts"));
const Newsletter = lazy(() => import("./Newsletter"));

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
  );
};

export default Home;

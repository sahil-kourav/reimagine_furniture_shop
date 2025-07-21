// components/LoaderFallback.jsx
import { motion } from "framer-motion";
import React from "react";

const LoaderFallback = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center gap-6"
    >
      <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-lg sm:text-xl text-gray-600 font-medium tracking-wide">
        Ohhhooo ohhhoooo... Please hold tight!
      </p>
    </motion.div>
  );
};

export default LoaderFallback;

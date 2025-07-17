import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-[#fafafa] py-16 px-4 sm:px-8 text-center rounded font-sans">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-medium tracking-wider text-gray-600 mb-2 uppercase">
          — Our Newsletter
        </p>

        <h2 className="text-2xl mt-8 sm:text-3xl font-serif font-light mb-2 leading-snug text-gray-900">
          Subscribe to Our Newsletter to Get <br />
          <span className="text-2xl sm:text-2xl font-serif text-gray-800 leading-snug font-light">
            Updates to Our Latest Collection
          </span>
        </h2>

        <p className="text-gray-600 text-md font-light mb-6 tracking-wide">
          Get 20% off on your first order just by subscribing to our newsletter.
        </p>

        <form className="flex items-center justify-center gap-2 max-w-xl border border-gray-400 mx-auto bg-white shadow-sm  transition-all">      
          <div className="flex items-center ml-4 gap-4 w-full">
            <Mail className="text-gray-500 w-6 h-6 sm:w-15 sm:h-10" />
            <input className='w-full p-2 sm:flex-1 outline-none' type="text" placeholder='Enter your email id' required />
            <button className='bg-gray-800 hover:bg-gray-700 text-white text-sm px-8 py-4' type='submit'>SUBSCRIBE</button>
          </div>
      </form>

      </div>
    </section>

  );
};

export default Newsletter;

import React from 'react';
import Partners from './Partners';


const LandingPage = () => {
  return (
  <>
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-white text-gray-900 p-8 md:p-16">
      {/* Left Side: Text and CTA */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Big Text */}
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Discover Your Next Adventure
        </h1>
        
        {/* Small Text */}
        <p className="text-lg md:text-xl text-gray-600">
          Explore new destinations with us. Wherever you want to go, we're here to take you there.
        </p>

        {/* Call to Action */}
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md">
          Get Started
        </button>
      </div>

      {/* Right Side: Image Placeholder */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-md flex items-center justify-center">
          {/* Placeholder Text for Image */}
          <span className="text-gray-500">Your Image Here</span>
        </div>
      </div>
    
    </div>
      
      </>
  );
};

export default LandingPage;

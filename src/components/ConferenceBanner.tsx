import React from 'react';
import { Calendar } from 'lucide-react';

const ConferenceBanner = () => {
  return (
    <div 
      className="w-full bg-cover bg-center py-8 relative" 
      style={{ 
        backgroundImage: "url('/lovable-uploads/university-main.webp')", 
        backgroundSize: 'cover',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left Logos (stacked on mobile) */}
        <div className="flex items-center gap-2 lg:flex-row flex-col">
          <img 
            src="Logo.png" 
            alt="CV-S3 Logo" 
            className="h-16 md:h-20 w-auto"
          />
          {/* <img 
            src="/lovable-uploads/Springer.jpg" 
            alt="Springer Logo" 
            className="h-16 md:h-20 w-auto"
          /> */}
        </div>

        {/* Center - Conference Details */}
        <div className="text-center text-white flex-grow">
          <h1 className="text-lg md:text-2xl font-medium tracking-tight mb-2">
            International Conference on Computer Vision for Smart Sustainable Systems
          </h1>
          <h2 className="text-base md:text-xl font-medium mb-2">(CV-S3 2026)</h2>
          <p className="text-sm md:text-base font-medium mb-2">
            Venue: Manipal Academy of Higher Education (MAHE), Dubai Campus
          </p>
          <div className="flex items-center justify-center text-sm md:text-base mb-2">
            <Calendar className="mr-2" size={16} />
            <p>25-26th September, 2026</p>
          </div>
          <p className="text-sm md:text-base font-medium text-yellow-300">
            Focus: AI, IoT, Smart Grids, Green Energy, Blockchain, Cloud Computing, and Sustainable Systems
          </p>
        </div>

        {/* Right Logo (moves below on mobile) */}
        <div>
          <img 
            src="/lovable-uploads/logo.png" 
            alt="Goldsmiths University of London" 
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ConferenceBanner;

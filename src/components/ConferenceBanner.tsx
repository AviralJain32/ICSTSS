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

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 overflow-hidden">
        {/* Left Logos (stacked on mobile) */}
        <div className="flex shrink-0 items-center gap-2 lg:flex-row flex-col">
          <img 
            src="Logo.png" 
            alt="CV-S3 Logo" 
            className="h-16 md:h-20 w-auto"
          />
          <img 
            src="/lovable-uploads/Springer.jpg" 
            alt="Springer Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Center - Conference Details */}
        <div className="min-w-0 flex-1 text-center text-white">
          <h1 className="mb-2 break-words text-lg font-medium leading-tight tracking-tight md:text-2xl">
            International Conference on Computer Vision for Smart Sustainable Systems
          </h1>
          <h2 className="mb-2 break-words text-base font-medium md:text-xl">(CV-S3 2026)</h2>
          <p className="mb-2 break-words text-sm font-medium md:text-base">
            Organised by Manipal Academy of Higher Education (MAHE), Dubai Campus in collaboration with Dong Nai University of Technology, Vietnam
          </p>
          <div className="mb-2 flex flex-wrap items-center justify-center text-sm md:text-base">
            <Calendar className="mr-2" size={16} />
            <p className="break-words">23rd - 24th September 2026</p>
          </div>
          <p className="break-words text-sm font-medium text-yellow-300 md:text-base">
            Focus: AI, IoT, Smart Grids, Green Energy, Blockchain, Cloud Computing, and Sustainable Systems
          </p>
        </div>

        {/* Right Logo (moves below on mobile) */}
        <div className="grid shrink-0 grid-cols-2 gap-2 items-center justify-items-center">
  <div className="h-16 md:h-20 flex items-center justify-center">
    <img
      src="/lovable-uploads/logo.png"
      alt="Goldsmiths University of London"
      className="h-16 md:h-20 w-auto object-contain"
    />
  </div>

  <div className="h-16 md:h-20 flex items-center justify-center">
    <img
      src="/lovable-uploads/DNTU.jpeg"
      alt="Dong Nai University of Technology Logo"
      className="h-16 md:h-20 w-auto object-contain"
    />
  </div>

  <div className="col-span-2 h-16 md:h-20 flex items-center justify-center">
    <img
      src="/lovable-uploads/AIQUAINT_Web_Logo.png"
      alt="AIQUAINT Web Logo"
      className="h-16 md:h-20 w-auto object-contain"
    />
  </div>
</div>
      </div>
    </div>
  );
};

export default ConferenceBanner;

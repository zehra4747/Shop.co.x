
import Image from 'next/image';
import React from 'react';


const Brands = () => {
  return (
    <div className=" relative  top-[797px]">
    
      <div className="flex justify-center">
        <Image 
          src="/Rectangle 3.png" 
          alt="Background Image" 
          className="w-full h-[122px] object-cover"
        />
      </div>

  
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-wrap gap-12 justify-center items-center">
          <Image 
            src="/versace.png" 
            alt="Versace Logo" 
            className="w-[166.48px] h-[33.16px]"
          />
          <Image
            src="/zara-logo-1 1.png" 
            alt="Zara Logo" 
            className="w-[91px] h-[38px]"
          />
          <Image
            src="/gucci-logo-1 1.png" 
            alt="Gucci Logo" 
            className="w-[156px] h-[36px]"
          />
          <Image
            src="/prada-logo-1 1.png" 
            alt="Prada Logo" 
            className="w-[194px] h-[32px]"
          />
          <Image
            src="/Group (1).png" 
            alt="Group Logo" 
            className="w-[206.79px] h-[33.35px]"
          />
        </div>
      </div>

    </div>
  );
};

export default Brands
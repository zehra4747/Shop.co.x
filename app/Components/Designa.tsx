import React from 'react';
import Image from 'next/image';

const Designa = () => {
  return (
    <div>
      {/* Main container with spacing */}
      <div className="relative w-[1170px] h-[866px]  gap-0 top-[2317px] rounded-[40px] bg-[rgba(240,240,240,1)] px-6 py-8 mb-12 left-[90px]">
        {/* Title */}
        <div className="font-integral text-[48px] font-extrabold leading-[57.6px] text-center w-full text-black mb-[20px] mt-10">
          BROWSE BY DRESS STYLE
        </div>

        {/* Browse Cards */}
        <div className="flex gap-4 mt-[52px] justify-start">
          {/* Casual Card */}
          <div className="relative w-[407px] h-[289px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              className="w-full h-full object-cover"
              src="/image 11.png"
              alt="Casual"
            />
            <div className="absolute top-[25px] left-[36px] font-satoshi text-[36px] font-bold leading-[48.6px] text-left text-black">
              Casual
            </div>
          </div>

          {/* Formal Card */}
          <div className="relative w-[684px] h-[289px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              src="/image 13.png"
              alt="Formal"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[25px] left-[36px] font-satoshi text-[36px] font-bold leading-[48.6px] text-left text-black">
              Formal
            </div>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="flex gap-4 mt-[52px] justify-start">
          {/* Party Card */}
          <div className="relative w-[684px] h-[289px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              className="w-full h-full object-cover"
              src="/image 12.png"
              alt="Party"
            />
            <div className="absolute top-[25px] left-[36px] font-satoshi text-[36px] font-bold leading-[48.6px] text-left text-black">
              Party
            </div>
          </div>

          {/* Gym Card */}
          <div className="relative w-[407px] h-[289px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              className="w-full h-full object-cover"
              src="/image 14.png"
              alt="Gym"
            />
            <div className="absolute top-[25px] left-[36px] font-satoshi text-[36px] font-bold leading-[48.6px] text-left text-black">
              Gym
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Designa;

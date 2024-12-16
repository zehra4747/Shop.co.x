
import React from 'react';

import Navbar from '../Components/Navbar';
import Image from 'next/image';
import Brands from '../Components/Brands';
import NewArrival from '../Components/NewArrival';

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className='flex items-center justify-center'>
          <Image
            src="/Rectangle 2.png" 
            alt="Image" 
            className="w-[1440px] h-[663px] absolute top-[134px]" 
          />
          <div>
            <Image
              src="/Vector (6).png" 
              alt="Image" 
              className="w-[104px] h-[104px] top-[220px] absolute left-[1255px]" 
            />
          </div>
          <div>
            <Image 
              src="/Vector (6).png" 
              alt="Image" 
              className="w-[56px] h-[56px] top-[431px] absolute left-[750px]" 
            />
          </div>
          <div className="absolute top-[237px] text-black left-[100px] w-[577px] h-[173px] text-[64px] font-integral font-extrabold leading-[64px] text-left decoration-skip-ink">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </div>
          <div className="absolute top-[442px] text-[rgba(0, 0, 0, 0.6)] left-[100px] w-[545px] h-[33px] text-[16px] font-satoshi leading-[22px] text-left decoration-skip-ink">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </div>
          <div className="w-[210px] bg-black h-[52px] top-[507px] left-[100px] rounded-full text-center flex items-start justify-center absolute gap[12px]">
            <div className='w-[75px] h-[22px] font-satoshi mt-3 text-white text-[16px] leading-[21.6px]'>Shop Now</div>
          </div>
        </div>
      </div>
      <Brands/>
      <div>
        <NewArrival/>
      </div>
      <div className='relative mt-12'>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold tracking-tight text-black mb-8 mt-2">
            TOP SELLING
          </h1>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto px-5 py-8 rounded-full">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="block relative h-58 rounded overflow-hidden">
                    <Image
                      alt="Shirt"
                      className="object-cover w-full h-full"
                      src="/Frame 32.png"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <h3 className="text-black font-bold text-sm tracking-widest title-font mb-2">
                      VERTICAL STRIPED SHIRT
                    </h3>
                    <div className="flex items-center mb-2">
                      <Image src="/Frame 35.png" alt="stars" className="h-4  mr-1" />
                      <p className="inline-flex items-center ml-2 text-sm text-gray-500">
                        5.0/5
                      </p>
                    </div>
                    <p className="text-[#000000] font-bold text-2xl">$212.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="block relative h-58 rounded overflow-hidden">
                    <Image
                      alt="T-shirt"
                      className="object-cover object-center w-full h-full"
                      src="/Frame 33.png"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <h3 className="text-black font-bold text-sm tracking-widest title-font mb-2">
                      COURAGE GRAPHIC T-SHIRT
                    </h3>
                    <div className="flex items-center mb-2">
                      <Image src="/Frame 39.png" alt="stars" className="h-4  mr-1" />
                      <p className="inline-flex items-center ml-2 text-sm text-gray-500">
                        4.0/5
                      </p>
                    </div>
                    <p className="text-[#000000] font-bold text-2xl">$145.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="block relative h-58 rounded overflow-hidden">
                    <Image
                      alt="Bermuda"
                      className="object-cover object-center w-full h-full"
                      src="/Frame 34.png"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <h3 className="text-black font-bold text-sm tracking-widest title-font mb-2">
                      LOOSE FIT BERMUDA SHORTS
                    </h3>
                    <div className="flex items-center mb-2">
                      <Image src="/Frame 40.png" alt="stars" className="h-4  mr-1" />
                      <p className="inline-flex items-center ml-2 text-sm text-gray-500">
                        3.0/5
                      </p>
                    </div>
                    <p className="text-[#000000] font-bold text-2xl">$80.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="block relative h-58 rounded overflow-hidden">
                    <Image
                      alt="Jeans"
                      className="object-cover object-center w-full h-full"
                      src="/Frame 38.png"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <h3 className="text-black font-bold text-sm tracking-widest title-font mb-2">
                      FADED SKINNY JEANS
                    </h3>
                    <div className="flex items-center mb-2">
                      <Image src="/Frame 41.png" alt="stars" className="h-4  mr-1" />
                      <p className="inline-flex items-center ml-2 text-sm text-gray-500">
                        4.5/5
                      </p>
                    </div>
                    <p className="text-[#000000] font-bold text-2xl">$210.40</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="w-full md:w-52 mb-5 md:mb-15 justify-center text-center bg-black hover:bg-black/80 transition-all text-white outline-1 px-16 py-4 rounded-full">
                    View All
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;



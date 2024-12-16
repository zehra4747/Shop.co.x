import React from "react";
import Image from "next/image";
export default function Topsell() {
  return (
    <div className="text-center py-12 top-[1728px]">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-8 mt-2">
        TOP SELLING
      </h1>

      {/* Products Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-8 rounded-full">
          <div className="flex flex-wrap -m-4">
            {/* Product 1 */}
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

            {/* Product 2 */}
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

            {/* Product 3 */}
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

            {/* Product 4 */}
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
            <div className="col-span-full flex justify-center items-center left-[611px] mt-8 mb-12">
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>
        </div>

          </div>
        </div>
      </section>
    </div>
  );
}
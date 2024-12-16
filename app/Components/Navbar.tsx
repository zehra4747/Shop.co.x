import Link from 'next/link'
import React from 'react'
import DropdownMenu from './Shop'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>

<header className="h-[38px] bg-[#000000] flex justify-center items-center px-4 sm:px-8 max-sm:h-[34px] max-sm:w-full">
  <h2 className="text-white font-satoshi font-normal leading-[18.9px] text-xs sm:text-sm text-center max-sm:text-[10px] max-sm:leading-[14px]">
    Sign up and get 20% off to your first order.{" "}
    <b className="underline decoration-solid">Sign Up Now</b>
  </h2>
    <div className="w-[20px] h-[20px] absolute right-4 hidden sm:block">
    <Image
      src="/Vector (1).png"
      alt="Icon"
      className="w-full h-full object-contain"
    />
  </div>
</header>

<div className="w-[1240px] h-[41px] flex items-center absolute top-[62px] left-[70px] gap-[40px]">
 
  <div className="w-[160px] h-[22px]">
    <Link href={"/"} className="font- text-[32px] font-extrabold leading-[38.4px] sm:text-[32px] ">
      SHOP.CO
    </Link>
  </div>

  
  <div className="mt-5 flex items-center gap-10 md:flex-row md:gap-6 text-sm sm:text-base">
  {/* Shop with Dropdown */}
  <div className="flex items-center gap-2 ">
    <DropdownMenu/>
  </div>


  



  {/* On Sale */}
  <div>
    <Link href={"/category"} className="font-satoshi text-[16px] font-normal leading-[21.6px] whitespace-nowrap">
      On Sale
    </Link>
  </div>

  {/* New Arrivals */}
  <div>
    <Link href={"/category"} className="font-satoshi text-[16px] font-normal leading-[21.6px] whitespace-nowrap">
      New Arrivals
    </Link>
  </div>

  {/* Brands */}
  <div>
    <Link href={"/category"} className="font-satoshi text-[16px] font-normal leading-[21.6px]">
      Brands
    </Link>
  </div>
  

  {/* Search Bar */}
  <div className="flex items-center gap-2 bg-gray-200 rounded-full w-[577px] h-[48px] p-[12px_16px]">
    <Image src="/Vector (3).png" alt="Search Icon" className="w-[20px] h-[20px]" />
    <input 
      type="text" 
      placeholder="Search for products..." 
      className="bg-transparent text-[16px] text-gray-600 focus:outline-none"
    />
  </div>
  
  {/* Icons */}
  <div className="flex items-center gap-4">
    <Image src="/Vector (4).png" alt="Cart Icon" className="w-[22px] h-[20px]" />
    <Image src="/Vector (5).png" alt="User Icon" className="w-[22px] h-[20px]" />
  </div>
</div>
</div>

  </div>

  




   
  )
}

export default Navbar

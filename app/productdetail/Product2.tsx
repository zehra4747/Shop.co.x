import React from 'react'
import { DropdownButton } from '../Components/DropdownButton'
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';


export const ProductDetailComponent = () => {
  return (
    <div className='font-Satoshi w-[90%] h-[22px] justify-start ml-20 mt-8'>
       

<div className='max-w-[1440px] h-[] flex justify-start items-center m-auto'>
  <Link href="/">
    <DropdownButton 
      textSize={11} 
      textColor="#403c3b" 
      textContent="Home" 
      icon={<FaAngleRight />} 
    />
  </Link>

  <Link href="/category">
    <DropdownButton 
      textSize={11} 
      textColor="#403c3b" 
      textContent="Shop" 
      icon={<FaAngleRight />} 
    />
  </Link>

  <Link href="/category">
    <DropdownButton 
      textSize={11} 
      textColor="#403c3b" 
      textContent="Men's" 
      icon={<FaAngleRight />} 
    />
  </Link>

  <Link href="/productdetail">
    <DropdownButton 
      textSize={11} 
      textColor="#403c3b" 
      textContent="T-shirts" 
    />
  </Link>
</div>

       


        


        <div></div>
       </div>
 
  )
}
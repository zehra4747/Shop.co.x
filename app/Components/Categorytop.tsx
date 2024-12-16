import React from 'react'
import { DropdownButton } from '../Components/DropdownButton'
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';


export const CategoryTop = () => {
  return (
    <><div className='font-Satoshi w-[90%] h-[22px] justify-start ml-20 mt-8'>
          <div className="max-w-[1440px] h-[] flex justify-start items-center m-auto absolute top-[158px]">
              <Link href="/" className="text-[11px] text-[#403c3b]">
                  <DropdownButton textSize={11} textColor="#403c3b" textContent="Home" icon={<FaAngleRight />} />
              </Link>
              <Link href="/category" className="text-[11px] text-[#403c3b]">
                  <DropdownButton textSize={11} textColor="#403c3b" textContent="Casual" />
              </Link>
          </div>





      </div><div></div></>
       
  
  )
}
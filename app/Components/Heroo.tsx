import React from 'react'
import Image from 'next/image'
import Brands from './Brands'
import Link from 'next/link'

const Heroo = () => {
  return (
    <div>
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
              className="w-[104px] h-[104px] top-[220px] absolute left-[1200px]" 
            />
          </div>
          <div>
            <Image
              src="/Vector (6).png" 
              alt="Image" 
              className="w-[56px] h-[56px] top-[431px] absolute left-[720px]" 
            />
          </div>
          <div className="absolute top-[237px] text-black left-[100px] w-[577px] h-[173px] text-[64px] font-integral font-extrabold leading-[64px] text-left decoration-skip-ink">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </div>
          <div className="absolute top-[442px] text-[rgba(0, 0, 0, 0.6)] left-[100px] w-[545px] h-[33px] text-[16px] font-satoshi leading-[22px] text-left decoration-skip-ink">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </div>
          <button className="w-[210px] bg-black h-[52px] top-[507px] left-[100px] rounded-full text-center flex hover:bg-neutral-600 hover:text-black items-start justify-center absolute gap[12px]">
            <Link href={"/productdetail"} className='w-[75px] h-[22px] font-satoshi mt-3 text-white text-[16px] leading-[21.6px]'>Shop Now</Link>
          </button>
        </div>
      </div>
<div className='mb-20'>
<Brands/>
</div>
    
  


</div> 
   
  

    
  )
}

export default Heroo 

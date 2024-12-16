import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=''>
      <div className="w-[1341px] h-[589px] top-[2881px] relative z-10" >

      <div className="w-[1220px] h-[180px] top-[3381px] ml-20 flex gap-20 p-[36px_64px]   justify-center left-50 rounded-2xl bg-black">
      <div className="w-[551px] h-[94px] font-integral text-[40px]  text-white font-extrabold leading-[45px] text-left underline-position-[from-font] decoration-skip-ink-none">
  STAY UPTO DATE ABOUT OUR LATEST OFFERS
</div>
<div className='flex flex-col gap-4'>
<div className="w-[279px] h-[48px] p-[12px_16px] gap-[12px] rounded-full flex bg-white">
<div className="w-[20.25px] h-[15.75px] top-[4.13px] left-[1.88px]">
    <Image
      src="/vector (7).png" 
      alt="Icon" 
      className="w-full h-full object-contain"
    />
  </div>
  <input 
    type="email" 
    placeholder="Enter your email address" 
    className="w-[173px] h-[22px] font-satoshi text-[16px] font-normal leading-[21.6px] text-left underline-position-[from-font] decoration-skip-ink-none"
  />
  
</div>

 
  <button className=" w-[279px] h-[46px] font-satoshi text-[16px] font-medium leading-[21.6px] text-center justify-center hover:bg-slate-600 hover:text-white  bg-white text-black rounded-full">
    Subscribe to Newsletter
  </button>
  </div>

</div>
  
</div>

</div>

   
  )
}

export default Footer

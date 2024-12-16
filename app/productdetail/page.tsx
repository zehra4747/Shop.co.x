import React from 'react'
import Navbar from '../Components/Navbar'
import ProductDetailGrid from './Product1'
import { ProductDetailComponent } from './Product2'
import Reviews from './Reviews'
import YouMayLike from './Youmaylike'
import Image from 'next/image'
import Footer2 from '../Components/Footer2'
import Footer1 from '../Components/Footer1'

import Product3 from './Product3'

const page = () => {
  return (
    <div>
      <Navbar/>

      <div className="relative w-[1240px] h-0 top-[134px] left-[100px] border-t border-transparent rotate-0">
  <Image src="/Line 4.png" alt="Your Image" className="w-full h-auto" />
</div>

    <div className='absolute top-[158px]'>  <ProductDetailComponent/> </div>
    <div className='mt-40 top=[216px]'> <ProductDetailGrid/> </div>
    <Product3/>
   

<div className="absolute top-[826px] left-[240px] w-[133px] h-[14px] text-gray-600 whitespace-nowrap ">
  <p className="font-satoshi text-[20px] font-normal leading-[22px] text-left">
    Product Details
  </p>
</div>
<div className="absolute top-[826px] left-[642px] w-[154px] h-[14px] text-center whitespace-nowrap">
  <p className="font-satoshi text-[20px] font-medium leading-[22px]">
    Rating & Reviews
  </p>
</div>
<div className="absolute top-[864px] left-[513px] w-[414px] h-[0px] border-t-2 border-black"></div>

<div className="absolute top-[826px] left-[1110px] w-[47px] h-[14px] text-right text-gray-600">
  <p className="font-satoshi text-[20px] font-normal leading-[22px]">
    FAQs
  </p>
</div>
<Reviews/>
<div className='top-[1078px] relative'><YouMayLike/></div>

<div className='relative '>

<div className="w-[1341px] h-[589px] top-[1199px] relative z-10" >

<div className="w-[1220px] h-[180px] top-[1477px] ml-20 flex gap-20 p-[36px_64px]   justify-center left-50 rounded-2xl bg-black">
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
      <div className='absolute top-[2567px] w-full z-0  h-[177px]'>
      <Footer1/>
      </div>
      <div className='top-[3100px] absolute ml-80'> <Footer2/>
     </div>




</div>

  )
}

export default page

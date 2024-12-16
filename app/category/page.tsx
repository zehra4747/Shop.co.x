import React from 'react'
import { CategoryTop } from '../Components/Categorytop'
import CasualCard from '../Components/Casualcard'
import Navbar from '../Components/Navbar'
import Image from 'next/image'
import Footer2 from '../Components/Footer2'
import Footer1 from '../Components/Footer1'


const CategoryPage = () => {
  return (
    <div>
      <Navbar/>  
        <div className="max-w-[1440px] max-h-full flex-grow justify-start items-center">

    <CategoryTop/>
    <div className='flex max-w-[90%] max-h-full justify-center items-center mb-48 mt-8 m-auto p-2'>
        <div className='w-[299px] h-[1120px] border-2 border-gray-200 border-opacity-0 '>
        <div className="absolute top-[204px] left-[70px]">
  <Image 
    src="/Frame 27 (1).png" 
    alt="Your Image Description" 
    className="w-[295px] h-[1220px]" 
  />
</div>

        </div>
        <div className='w-[925px] h-[1240px] border-b-2 border-gray-200 p-2'>
          <CasualCard/><br />


        </div>

    </div>
    </div>

    <div className='relative '>

<div className="w-[1341px] h-[589px] top-[231px] relative z-10" >

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
      <div className='absolute top-[1821px] w-full z-0  h-[177px]'>
      <Footer1/>
      </div>
      <div className='top-[2328px] absolute ml-80'> <Footer2/>
     </div>
    </div>
  )
}
export default CategoryPage
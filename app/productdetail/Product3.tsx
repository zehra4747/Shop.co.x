import React from 'react'
import Image from 'next/image'

const Product3 = () => {
  return (
    <div>
      <p className="absolute whitespace-nowrap top-[216px] left-[750px] w-[600px] h-[48px] text-left font-sans text-[40px] font-extrabold leading-[48px]">
  ONE LIFE GRAPHIC T-SHIRT
</p>
<div className="absolute top-[278px] left-[750px] w-[193px] h-[24.71px] flex items-center gap-[16px]">
  <Image src="Frame 11.png" alt="Your image" className="w-auto h-auto" />
  </div> 
   <div className='flex gap-5 absolute top-[317px] left-[750px]'><p className="text-[32px] font-satoshi font-bold leading-[43.2px] text-left ">
  $260
</p>
<p className="text-[32px] font-satoshi text-gray-400 font-bold leading-[43.2px] text-left line-through ">
  $300
</p>
<div className="w-[72px] h-[34px] top-[321px] left-[938px] p-[6px_14px] rounded-[62px_0px_0px_0px]">
  <Image src="/Frame 3.png" alt="description" className="w-full h-full object-contain" />
</div>



</div>
<div className="w-[590px] h-[33px] top-[380px] absolute left-[750px] text-[rgba(0,0,0,0.6)] font-satoshi text-[16px] font-normal leading-[22px] text-left">
  This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
</div>
<div className="w-[590px] h-0 top-[437px] absolute left-[750px] border-t border-gray-600"></div>

<div className="w-[93px] h-[11px] top-[461px] left-[750px] text-[rgba(0,0,0,0.6)] absolute whitespace-nowrap font-satoshi text-[16px] font-normal leading-[21.6px] text-left">
  Select Colors
</div>
<div className="w-[143px] absolute h-[37px] top-[488px] left-[750px] gap-[16px] flex items-center">
  <Image src="/Frame 77.png" alt="Image Description" className="w-full h-full" />
</div>
<div className="w-[590px] h-0 top-[549px] absolute left-[750px] border-t border-gray-600"></div>
<p className="w-[87px] h-[11px] top-[573px] left-[750px] absolute whitespace-nowrap gap-0 font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[rgba(0,0,0,0.6)]">
  Choose Size
</p>
<div className="flex items-center gap-[12px] absolute w-auto h-auto top-[600px] left-[750px]">
  <Image src="/Frame 16.png" alt="img" className="" />
  
</div>
<div className="w-[590px] h-0 top-[670px] absolute left-[750px] border-t border-gray-600"></div>
<div className=" absolute w-[170px] h-[52px] top-[694px] left-[750px] border-black">
  <Image src="/Frame 17.png" alt="img" className="w-auto h-full" />
  
</div>
<button className="w-[400px] h-[52px] top-[694px] left-[940px] p-[16px_54px] gap-[12px] rounded-full absolute bg-black text-white font-satoshi text-[16px] font-medium leading-[21.6px] text-center hover:bg-zinc-800">
  Add to cart
</button>




    </div>
  )
}

export default Product3

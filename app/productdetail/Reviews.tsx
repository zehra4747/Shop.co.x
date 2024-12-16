import React from 'react'
import Image from 'next/image'

const Reviews = () => {
  return (
    <div>
      <div className="absolute top-[896px] left-[100px] w-[125px] h-[32px] text-[24px] whitespace-nowrap font-bold leading-[32.4px] text-left">
  All Reviews
</div>
<div className="absolute top-[910px] left-[233px] w-[33px] h-[11px] text-[16px] font-normal leading-[22px] text-left text-gray-500 mb-2">
  (451)
</div>
<div className="absolute top-[888px] left-[986px] w-[354px] h-[48px] gap-[10px] flex items-center">
  <Image src="/Frame 21.png" alt="Image" className="w-auto h-full" />
</div>

<div className="absolute top-[960px] left-[100px] w-[610px] h-[241.58px] p-[28px_32px_28px_32px] gap-[342px] rounded-tl-[20px] border-t border-l-0 border-r-0 border-b-0">
  <Image src="/Frame 22 (1).png" alt="Image" className="w-full h-full object-cover" />
</div>
<div className="absolute top-[960px] left-[730px] w-[610px] h-[241.58px] p-[28px_32px_28px_32px] gap-[342px] rounded-tl-[20px] border-t border-l-0 border-r-0 border-b-0">
  <Image src="/Frame 23.png" alt="Image" className="w-full h-full object-cover" />
</div>
<div className="absolute top-[1222px] left-[100px] w-[610px] h-[241.58px] p-[28px_32px_28px_32px] gap-[342px] rounded-tl-[20px] border-t border-l-0 border-r-0 border-b-0">
  <Image src="/Frame 24.png" alt="Image" className="w-full h-full object-cover" />
</div>
<div className="absolute top-[1484px] left-[100px] w-[610px] h-[241.58px] p-[28px_32px_28px_32px] gap-[342px] rounded-tl-[20px] border-t border-l-0 border-r-0 border-b-0">
  <Image src="/Frame 26.png" alt="Image" className="w-full h-full object-cover" />
</div>
<div className="absolute top-[1222px] left-[730px] w-[610px] h-[241.58px] p-[28px_32px_28px_32px] gap-[342px] rounded-tl-[20px] border-t border-l-0 border-r-0 border-b-0">
  <Image src="/Frame 25.png" alt="Image" className="w-full h-full object-cover" />
</div>
<div className="absolute top-[1484px] left-[730px] w-[610px] h-[241.58px] p-[28px_32px_28px_32px] gap-[342px] rounded-tl-[20px] border-t border-l-0 border-r-0 border-b-0">
  <Image src="/Frame 27.png" alt="Image" className="w-full h-full object-cover" />
</div>
<button className="absolute top-[1762px] left-[605px] w-[230px] whitespace-nowrap h-[52px] p-[16px_54px] gap-[12px] rounded-[62px] border-black hover:bg-black hover:text-white border-t border-l-0 border-r-0 border-b-0 text-left font-satoshi text-[16px] font-medium leading-[21.6px]">
  Load More Reviews
</button>


    </div>
  )
}

export default Reviews

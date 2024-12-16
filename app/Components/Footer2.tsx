import React from 'react'

import Image from 'next/image'

const Footer2 = () => {
  return (
    <div>
       <div>
      {/* Top Divider */}
      <div className="border-t border-[#0000001A] mt-0 mb-4"></div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="font-satoshi text-sm text-[#00000099] my-2">
          Shop.co © 2000-2023, All Rights Reserved
        </div>
        <Image src="/Frame 53.png" alt="Paylogo2" height={30} width={281} />
      </div>
    </div>
    </div>
  )
}

export default Footer2

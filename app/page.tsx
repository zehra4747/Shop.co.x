import React from 'react'
import Navbar from './Components/Navbar'
import Heroo from './Components/Heroo'
import NewArrival from './Components/NewArrival'
import Topsell from './Components/Topsell'
import Designa from './Components/Designa'
import Happy from './Components/Happy'
import Footer from './Components/Footer'
import Footer1 from './Components/Footer1'     
import Footer2 from './Components/Footer2'


const page = () => {
  return (
    <div className="flex flex-col ">
      
      <Navbar/>
      <Heroo/>
      <div className='top-[997px] absolute mb-40'> <NewArrival/></div>
     <div className='top-[1728px] absolute mb-80'>  <Topsell/></div>
     <Designa/>
     <div className='top-[3363px] absolute mt-40 left-20 mb-80'> <Happy/> </div>
     <Footer/>
      <div className='absolute top-[4031px] w-full z-0  h-[177px]'>
      <Footer1/>
      </div>
      <div className='top-[4531px] absolute ml-80'> <Footer2/>
     </div>
      
      </div>

  )
}

export default page


  
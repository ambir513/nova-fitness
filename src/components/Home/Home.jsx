import React, { useEffect, useRef } from 'react'
import wallpaper from '../../Images/home-wallpaper.png';
import ipadWallaper from '../../Images/ipad-home-wallpaper.png';
import mobileWallpaper from '../../Images/mobile-home-wallpaper.png';
import { Link } from 'react-router';



function Home() {
  const img = useRef()
  const laptop = window.innerWidth >= 1024
  const ipod = window.innerWidth >= 640
  const mobile = window.innerWidth >= 393

  return (
    <div className="lg:static">
      <div className="relative w-full lg:h-[700px] md:h-[600px] sm:h-[500px]  sm:w-full">
        <img ref={img} src={(laptop ? wallpaper : null) || (ipod ? ipadWallaper : null) || (mobile ? mobileWallpaper : null)} className="z-10 object-cover object-center w-full h-full" alt="Home Wallpaper" />
      </div>
      <div className=" lg:absolute md:absolute absolute left-5 top-113 md:left-10 sm:absolute sm:top-90 sm:left-10 md:top-110 lg:left-20 lg:top-95   z-20">
        <h1 className='lg:text-4xl md:text-2xl sm:text-xl text-xl font-extrabold lg:text-WallpaperColorText  text-white sm:text-WallpaperColorText md:text-neutral-200 '>Every Rep. Every <span className=' lg:text-WallpaperColorText2 md:text-neutral-100 sm:text-neutral-200 text-'>
          Step. Every Day.
        </span></h1>
        <p className='mt-4 sm:text-WallpaperColorText2 sm:text-md text-stock text-sm'>"Every rep builds strength, every step fuels progress, every day shapes success."</p>
        <Link to="/membership" className='cursor-pointer'>
          <button className=' cursor-pointer bg-gradient-to-r sm:mt-8 mt-4 from-blue-500 to-blue-700  text-white  text-sm rounded-lg py-2 px-4 font-bold'>Get Membership</button>
        </Link>
      </div>
    </div>
  )
}
//bg-gradient-to-r from-orange/90 to-orange-700 rounded-lg p-2
export default Home
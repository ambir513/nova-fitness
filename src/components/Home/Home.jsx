import React, { useEffect, useRef } from 'react'
import wallpaper from '../../Images/home-wallpaper.png';
import ipadWallaper from '../../Images/ipad-home-wallpaper.png';
import mobileWallpaper from '../../Images/mobile-home-wallpaper.png';



function Home() {
  const img = useRef()
  const laptop = window.innerWidth >= 1024
  const ipod = window.innerWidth >= 640
  const mobile = window.innerWidth >= 393

  useEffect(() => {
    console.log("rendering");
  }, [window.innerWidth])

  return (
    <div className="lg:static">
      <div className="relative w-full lg:h-[700px] md:h-[600px] sm:h-[500px]  sm:w-full">
        <img ref={img} src={(laptop ? wallpaper : null) || (ipod ? ipadWallaper : null) || (mobile ? mobileWallpaper : null)} className="z-10 object-cover object-center w-full h-full" alt="Home Wallpaper" />
      </div>
      <div className=" lg:absolute left-10 top-80 text-orange  z-20">
        <h1 className='lg:text-3xl font-extrabold'>Every Rep. Every Step. Every Day.</h1>
      </div>
    </div>
  )
}

export default Home
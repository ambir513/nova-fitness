import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className='z-10'>
            <div className="w-full h-fit md:p-20 p-10 sm:p-15 flex-col md:flex-col lg:p-20 flex lg:flex-col sm:flex-col justify-center items-center">
                <div className="flex flex-col  sm:flex md:flex gap-10  md:gap-[20px] lg:flex-row md:flex-wrap sm:flex-wrap lg:flex-wrap sm:gap-[25px] lg:gap-[50px]">
                    <div className="flex flex-col gap-1.5 lg:w-[500px] lg:flex-wrap">
                        <div className="flex items-center gap-2">
                            <img src="/logo2.svg" alt="" width={75} />
                            <p className=' lg:mt-1 mt-1 lg:text-xl sm:text-lg text-lg'>Fitness</p>
                        </div>
                        <div className="lg:mt-5 md:mt-5 sm:mt-5 mt-4">
                            <p className='text-textColor'>Largest Gym In Dwarka With Premium Graded Equipments With Steam, Cafe, Zumba, Dance, Yoga, Strength, Cardio And Many More</p>
                        </div>
                    </div>
                    <div className="lg:flex-row flex sm:flex-row flex-wrap gap-x-28 gap-y-20 sm:ml-0 ml-2  lg:flex-wrap lg:gap-[100px] sm:gap-[60px] sm:mt-10 lg:mt-0 md:mt-10 md:gap-[80px] ">
                        <div className="flex flex-col  gap-[15px]">
                            <p className='text-textColor'>MENU</p>
                            <Link to="/"><p>Home</p></Link>
                            <Link to="/about"><p>About</p></Link>
                            <Link to="/contact"><p>Contact</p></Link>
                            <Link><p>Connection</p></Link>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <p className='text-textColor'>OVERVIEW</p>
                            <Link><p>Membership</p></Link>
                            <Link><p>Yearly Plan</p></Link>
                            <Link><p>Security</p></Link>
                            <Link><p>Feature</p></Link>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <p className='text-textColor'>Company</p>
                            <Link><p>About us</p></Link>
                            <Link><p>Queries</p></Link>
                            <Link><p>Loaction</p></Link>
                            <Link><p>Trainer</p></Link>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <p className='text-textColor'>SOCIALS</p>
                            <Link><p>Instagram</p></Link>
                            <Link><p>Facebook</p></Link>
                            <Link><p>Twitter</p></Link>
                            <Link><p>Sitemap</p></Link>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 w-full border-stock mt-20">
                    <p className='text-textColor text-center mt-10'>&copy; 2025 Nova Fitness. <Link> All rights reserved.</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router'
import { FaBars } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";


let toggle = true  // !true -> !false 
let theme = true // !true -> !false 

function Header() {

    // access the DOM element
    let navBar = useRef()
    let sun = useRef()
    let moon = useRef()

    // when window width-size is greater than or equal to 640px
    // then the SlideBar get removed
    window.addEventListener("resize", (e) => {
        if (window.innerWidth >= 640) {
            navBar.current.style.display = "none"
        } return
    })

    // toggle of slideBar
    function handleSlideBar() {
        if (toggle) {
            navBar.current.style.display = "block"
            toggle = false
        } else {
            navBar.current.style.display = "none"
            toggle = true
        }

    }

    // toggle of Dark / white themes 
    function handleTheme() {
        if (theme) {
            moon.current.style.display = "none"
            sun.current.style.display = "inline"

            theme = false
            console.log(theme);
        } else {
            moon.current.style.display = "inline"
            sun.current.style.display = "none"
            theme = true
            console.log(theme);
        }

    }


    return (
        <>
            <header className='w-full h-fit flex sm:justify-center items-center z-2 fixed top-0 shadow-md'>
                <nav className='w-full h-fit bg-white flex sm:justify-center z-50 lg:gap-[300px] md:gap-[180px] sm:gap-[100px] items-center py-5 px-4  justify-between ' >
                    <NavLink to="/">
                        <div className="flex justify-center items-center w-fit sm:ml-0 ml-6 " >
                            <img src="/logo2.svg" alt="" width={45} />
                        </div>
                    </NavLink>
                    <ul className='sm:flex justify-center items-center gap-10 hidden'>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <div className="flex sm:justify-center sm:static absolute right-20 cursor-pointer sm:items-center sm:gap-8">
                        <div className="cursor-pointerm" onClick={handleTheme}>
                            <div ref={moon} >
                                <IoMoon />
                            </div>
                            <div ref={sun} className='hidden'>
                                <MdSunny />
                            </div>
                        </div>
                        <Link download={""}>
                            <div className="w-fit bg-orange  justify-center items-center gap-[5px] text-white py-1 px-3 rounded-lg sm:flex hidden hover:bg-orange-400">
                                <p className='font-bold'>Subscription</p> <LiaRupeeSignSolid className='text-xl' />
                            </div>
                        </Link>

                    </div>

                    <button className='sm:hidden inline-block  py-1.5 px-3 rounded-sm cursor-pointer' onClick={handleSlideBar} >
                        <FaBars className='text-lg' />
                    </button>
                </nav>
            </header>
            { // 👇 slidebar 
            }
            <div className="float-right w-3/5 bg-backgoundColor h-full sm:hidden z-30 hidden fixed right-0" ref={navBar} >
                <ul className='flex flex-col  gap-7 mt-4'>
                    <NavLink to="/">
                        <li className='bg-white p-3 mx-3 rounded-lg' onClick={() => {
                            navBar.current.style.display = "none"
                            toggle = true
                        }}>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/about" >
                        <li className='bg-white p-3 mx-3 rounded-lg' onClick={() => {
                            navBar.current.style.display = "none"
                            toggle = true
                        }}>
                            About
                        </li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li className='bg-white p-3 mx-3 rounded-lg' onClick={() => {
                            navBar.current.style.display = "none"
                            toggle = true
                        }}>
                            Contact
                        </li>
                    </NavLink>
                    <Link to="/about" download={""}>
                        <li className=' mx-3 py-2 flex justify-center items-center gap-[8px] bg-orange text-white px-3 rounded-lg text-center hover:bg-orange-400  cursor-pointer ' onClick={() => {
                            navBar.current.style.display = "none"
                            toggle = true
                        }}>
                            <p className='font-bold'>Subscription</p> <LiaRupeeSignSolid className='text-xl' />
                        </li>
                    </Link>

                </ul>




            </div>
        </>
    )
}

export default Header
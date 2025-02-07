import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router'
import { FaBars } from "react-icons/fa6";


let toggle = true  // !true -> !false 

function Header() {

    // access the DOM element
    let navBar = useRef()

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



    return (
        <>
            <header className='w-full h-fit flex sm:justify-center items-center z-50 fixed top-0 shadow-md'>
                <nav className='w-full h-fit bg-white flex sm:justify-center z-50 lg:gap-[300px] md:gap-[180px] sm:gap-[100px] items-center py-5 px-4  justify-between ' >
                    <NavLink to="/" >
                        <div className="flex justify-center items-center w-fit sm:ml-0 ml-6 " >
                            <img src="/logo2.svg" alt="" width={45} />
                        </div>
                    </NavLink>
                    <ul className='sm:flex justify-center items-center gap-10 hidden'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${isActive ? "text-blue-500" : "text-blackColor"}
                                        font-bold hover:text-blue-500`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) =>
                                `${isActive ? "text-blue-500" : "text-blackColor"}
                                        font-bold hover:text-blue-500`
                            }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                `${isActive ? "text-blue-500" : "text-blackColor"}
                                        font-bold hover:text-blue-500`
                            }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <div className=" sm:justify-center sm:static absolute right-20 sm:items-center sm:gap-5 sm:flex hidden">

                        <Link to="/login">
                            <button className=' cursor-pointer bg-blue-100 text-blue-700 text-sm rounded-lg py-2 px-6 font-bold'>Login</button>
                        </Link>

                        <Link to="/signup">
                            <button className=' cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700  text-white  text-sm rounded-lg py-2 px-6 font-bold'>Sign up</button>
                        </Link>

                    </div>

                    <button className='sm:hidden inline-block  py-1.5 px-3 rounded-sm cursor-pointer' onClick={handleSlideBar} >
                        <FaBars className='text-lg' />
                    </button>
                </nav>
            </header>
            { // 👇 slidebar 
            }
            <div className="float-right w-3/5 bg-blue-100 h-full sm:hidden z-30 hidden fixed right-0" ref={navBar} >
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

                    <Link to="/signup">
                        <li className=' mx-3 text-center cursor-pointer  bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm rounded-lg py-2.5 px-6 font-bold' onClick={() => {
                            navBar.current.style.display = "none"
                            toggle = true
                        }}>
                            <button>Sign up</button>
                        </li>
                    </Link>
                </ul>
                <Link to="/login">
                    <div className=' mx-3 mt-3 text-center cursor-pointer bg-blue-100 text-blue-700 text-sm rounded-lg py-2 px-6 font-bold border-2 ' onClick={() => {
                        navBar.current.style.display = "none"
                        toggle = true
                    }}>
                        <button>Login</button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Header
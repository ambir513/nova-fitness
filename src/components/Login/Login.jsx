import React, { useState } from "react";
import { Link } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PiLockKeyOpenBold } from "react-icons/pi";





function Login() {
    const [emailVal, SetEmailVal] = useState("");
    const [password, setPassword] = useState("");
    const [typechanger, setTypeChanger] = useState(false)


    function handleEmail(e) {
        SetEmailVal(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div className="flex flex-col justify-center items-center h-dvh text-black w-full ">
            <img src="/logo2.svg" alt="" width={55} />
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col justify-center  w-fit p-4   bg-white rounded-lg h-fit px-7">
                    <h1 className="text-lg text-center font-extrabold">
                        Welcome back <span className="text-blue-600">Nova Fitness</span>
                    </h1>
                    <p className="text-black/50 font-bold text-xs text-center">
                        Please login now be our fitness
                    </p>
                    <div className="flex flex-col relative gap-2  mt-5 mb-3">
                        <label htmlFor="eamil" className="text-sm font-bold ">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={emailVal}
                            onChange={handleEmail}
                            placeholder="example@gmail.com"
                            className="w-full  focus:outline-none border-2 border-black/10 text-black py-1.5 px-10 rounded-lg "
                        />
                        <HiOutlineMail className="absolute top-9.5 left-3" size={20} />
                    </div>
                    <div className="flex flex-col relative justify-center gap-2 mt-2 mb-6">
                        <p className="absolute right-2 top-1 text-sm underline text-blue-600  font-semibold cursor-pointer" >Forgot password?</p>
                        <label htmlFor="Password" className="text-sm font-bold">
                            Password
                        </label>
                        <input
                            type={typechanger ? 'text' : 'password'}
                            id="Password"
                            value={password}
                            placeholder="Password"
                            onChange={handlePassword}
                            className="w-full focus:outline-none border-2 border-black/10 text-black py-1.5  px-10 rounded-lg "
                        />
                        <PiLockKeyOpenBold className="absolute top-9.5 left-3" size={20} />
                        <button className="absolute right-4.5 top-9.5 cursor-pointer"
                            onClick={() => setTypeChanger(prev => !prev)}
                        >{typechanger ? <FiEye size={20} /> : <FiEyeOff size={20} />}</button>
                    </div>
                    <button
                        type="submit"
                        className=" cursor-pointer rounded-lg w-full bg-indigo-500 font-bold py-2 text-white hover:bg-indigo-600 px-4 "
                    >
                        login
                    </button>
                    <p className="text-gray-500 text-sm text-center mt-4">
                        Doesn't have account? &nbsp;&nbsp;
                        <span className="font-bold text-md text-indigo-500">
                            <Link to="/signup">Create account</Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;

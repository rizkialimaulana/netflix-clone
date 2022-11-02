import React from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png";
import { FaGoogle, FaKey, FaUser } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";

function RegisterScreen() {
  return (
    <div>
      <div className="top-0 z-20 absolute w-full flex flex-row items-center justify-between py-7 px-12 md:px-14">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt=""
            className="relative w-40 h-fit cursor-pointer"
          />
        </Link>
        <Link to="/login">
          <button className="py-2 px-4 text-lg rounded-sm bg-red-600 text-white">
            Sign In
          </button>
        </Link>
      </div>
      <div
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="z-30 text-white backdrop-blur-sm w-[70%] md:w-[40rem] h-[30rem] flex flex-col items-center justify-evenly bg-black/70">
          <h1 className='font-bold text-3xl'>Register</h1>
          <form className="flex flex-col items-center space-y-5 text-lg">
            <div className="flex items-center space-x-6">
              <FaUser className="text-red-600 text-xl" />
              <input
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="text"
                placeholder="Name"
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="flex items-center space-x-6">
              <BsMailbox className="text-red-600 text-xl" />
              <input
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="email"
                placeholder="Email"
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="flex items-center space-x-6">
              <FaKey className="text-red-600 text-xl" />
              <input
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="password"
                placeholder="Password"
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-red-600 border border-red-600 px-6 py-3">
                Cancel
              </button>
              <button className="text-white bg-red-600 px-6 py-3">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="absolute h-screen bg-gradient-to-b from-black via-transparent to-black z-10 w-full" />
      </div>
    </div>
  )
}

export default RegisterScreen
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/img/bg.png";
import Navbar from '../components/Navbar';

function RegisterScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  return (
    <div>
      <Navbar />
      <div
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="z-30 text-white backdrop-blur-sm w-[25rem] px-4 md:px-0 md:w-[40rem] h-[30rem] flex flex-col items-center justify-evenly bg-black/70">
          <h1 className="font-bold text-3xl">Register</h1>
          <form className="flex flex-col items-center space-y-5 text-sm md:text-lg">
            <div className="flex items-center">
              <input
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex items-center">
              <input
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center">
              <input
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="text"
                placeholder="Email"
                ref={emailRef}
              />
            </div>
            <div className="flex items-center">
              <input
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="password"
                placeholder="Password"
                ref={passRef}
              />
            </div>
            <button
              onClick={register}
              className="text-white bg-red-600 px-6 py-3"
            >
              Sign Up
            </button>
          </form>
          <p className="text-white">
            Already have an account?{" "}
            <Link
              to="/"
              className="cursor-pointer transition-color duration-[250ms] hover:text-red-600"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div className="absolute h-screen bg-gradient-to-b from-black via-transparent to-black z-10 w-full" />
      </div>
    </div>
  );
}

export default RegisterScreen
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png";
import { FaGlobe, FaGoogle, FaKey, FaUser } from "react-icons/fa";
import { MdArrowDropDown } from 'react-icons/md';

function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log(email, password);
  };
  const handleReset = () => {
    setEmail("");
    setPassword("");
    setName("");
    setUsername("");
  };
  return (
    <div>
      <div className="top-0 z-20 absolute w-full flex flex-row items-center justify-between py-7 px-12 md:px-14">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt=""
            className="relative w-20 md:w-40 h-fit cursor-pointer"
          />
        </Link>
        <div className="flex flex-row items-center space-x-5">
          <div className="text-white hidden md:flex backdrop-blur-md items-center space-x-3 py-2 px-3 text-lg border">
            <FaGlobe />
            <span>Bahasa Indonesia</span>
            <MdArrowDropDown className="text-2xl" />
          </div>
          <Link to="/login">
            <button className="py-2 px-4 text-sm md:text-lg rounded-sm bg-red-600 text-white">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="z-30 text-white backdrop-blur-sm w-[90%] px-4 md:px-0 md:w-[40rem] h-[30rem] flex flex-col items-center justify-evenly bg-black/70">
          <h1 className="font-bold text-3xl">Register</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5 text-sm md:text-lg">
            <div className="flex items-center">
              <input
                value={name}
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <input
                value={username}
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <input
                value={email}
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <input
                value={password}
                className="outline-none p-4 border-b border-red-600 bg-transparent"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={handleReset} className="text-red-600 border border-red-600 px-6 py-3">
                Cancel
              </button>
              <button className="text-white bg-red-600 px-6 py-3">
                Sign In
              </button>
            </div>
          </form>
          <p className="text-white">
            Already have an account?{" "}
            <Link
              to="/login"
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
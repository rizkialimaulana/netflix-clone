import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="top-0 z-20 w-full absolute flex flex-row items-center justify-between py-7 px-12 md:px-14">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt=""
          className="relative w-40 h-fit cursor-pointer"
        />
      </Link>
      <div className='flex flex-row items-center space-x-5'>
        <div className='text-white hidden md:flex backdrop-blur-md items-center space-x-3 py-2 px-3 text-lg border'>
            <FaGlobe />
            <span>Bahasa Indonesia</span>
            <MdArrowDropDown className='text-2xl'/>
        </div>
        <Link to="/home">
          <button className="py-2 px-4 text-lg rounded-sm bg-red-600 text-white">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar
import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="top-0 z-10 w-full absolute flex flex-row items-center justify-between py-7 px-14">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt=""
        className="relative w-40 h-fit"
      />
      <div className='flex flex-row items-center space-x-5'>
        <div className='text-white flex backdrop-blur-md items-center space-x-3 py-2 px-3 text-lg border'>
            <FaGlobe />
            <span>Bahasa Indonesia</span>
            <MdArrowDropDown className='text-2xl'/>
        </div>
        <button className="py-2 px-4 text-lg rounded-sm bg-red-600 text-white">
          Masuk
        </button>
      </div>
    </div>
  );
}

export default Navbar
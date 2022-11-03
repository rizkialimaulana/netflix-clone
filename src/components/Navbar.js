import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';
import avatar from '../assets/img/avatar.png'
import { useNavigate } from 'react-router-dom'

const Navbar = ({clickLogin}) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate()
  return (
    <div className="top-0 z-20 w-full absolute flex flex-row items-center justify-between py-7 px-12 md:px-14">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt=""
          className="relative w-32 md:w-40 h-fit cursor-pointer"
        />
      </Link>
      <div className="flex flex-row items-center space-x-5">
        <div className="text-white hidden md:flex backdrop-blur-md items-center space-x-3 py-2 px-3 text-lg border">
          <FaGlobe />
          <span>Bahasa Indonesia</span>
          <MdArrowDropDown className="text-2xl" />
        </div>
        {!user ? (
          <button
            onClick={clickLogin}
            className="py-2 px-4 text-sm md:text-lg rounded-sm bg-red-600 text-white"
          >
            Sign In
          </button>
        ) : (
          <img src={avatar} alt="" className='w-14 h-14 cursor-pointer' onClick={() => navigate('/profile')}/>
        )}
      </div>
    </div>
  );
}

export default Navbar
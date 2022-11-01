import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa'
import mockup from '../assets/img/tv.png'
import mockup1 from '../assets/img/phone.png'

const LandingScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center border-b-8 border-gray-500">
        <div className='relative bg-[url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png")] brightness-50 bg-fixed h-screen w-full' />
        <div className="absolute z-10 flex flex-col items-center justify-center space-y-6 text-white">
          <h1 className="text-5xl text-red">
            Film, acara TV tak terbatas, dan lebih banyak lagi.
          </h1>
          <span className="text-3xl">
            Tonton di mana pun. Batalkan kapan pun.
          </span>
          <p className="text-xl">
            Siap menonton? Masukkan email untuk membuat atau memulai lagi
            keanggotaanmu.
          </p>
          <div className="flex items-center w-[50rem] h-[5rem] bg-white">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow h-full outline-none text-black placeholder-slate-400 text-xl px-5"
            />
            <button className="bg-red-600 h-full w-52 text-3xl flex items-center justify-center">
              Mulai <IoIosArrowDropright className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-black flex flex-row items-center px-6 py-10 justify-center text-white border-b-8 border-gray-500">
        <div className="flex-[0.5] flex flex-col space-y-6 justify-center">
          <h1 className="text-5xl">Nikmati di TV-mu.</h1>
          <span className="text-3xl">
            Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar
            Blu-ray, dan banyak lagi.
          </span>
        </div>
        <div className="flex-[0.5] flex items-center justify-center">
          <img src={mockup} className="w-[30rem] object-contain" />
        </div>
      </div>
      <div className="h-fit w-full bg-black flex flex-row items-center px-6 py-10 justify-center text-white border-b-8 border-gray-500">
        <div className="flex-[0.5] flex items-center justify-center">
          <img src={mockup1} className="w-[30rem] object-contain" />
        </div>
        <div className="flex-[0.5] flex flex-col space-y-6 justify-center">
          <h1 className="text-5xl">
            Download acara TV untuk menontonnya secara offline.
          </h1>
          <span className="text-3xl">
            Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang
            bisa ditonton.
          </span>
        </div>
      </div>
      <div className="h-fit w-full bg-black flex flex-col space-y-10 items-center px-6 py-10 justify-center text-white border-b-8 border-gray-500">
        <h1 className='text-5xl'>Tanya Jawab Umum</h1>
        <div className='w-[50rem] flec flex-col space-y-4'>
            <div className='bg-gray-500 p-4 flex items-center justify-between'>
                <h1 className='text-xl'>Apa itu Netflix?</h1>
                <FaPlus className='text-xl'/>
            </div>
            <div className='bg-gray-500 p-4 flex items-center justify-between'>
                <h1 className='text-xl'>Berapa biaya berlangganan Netflix?</h1>
                <FaPlus className='text-xl'/>
            </div>
            <div className='bg-gray-500 p-4 flex items-center justify-between'>
                <h1 className='text-xl'>Di mana saya bisa menonton?</h1>
                <FaPlus className='text-xl'/>
            </div>
            <div className='bg-gray-500 p-4 flex items-center justify-between'>
                <h1 className='text-xl'>Bagaimana cara membatalkannya?</h1>
                <FaPlus className='text-xl'/>
            </div>
            <div className='bg-gray-500 p-4 flex items-center justify-between'>
                <h1 className='text-xl'>Apa yang bisa di tonton di Netflix?</h1>
                <FaPlus className='text-xl'/>
            </div>
        </div>
        <p className="text-xl">
            Siap menonton? Masukkan email untuk membuat atau memulai lagi
            keanggotaanmu.
          </p>
          <div className="flex items-center w-[50rem] h-[5rem] bg-white">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow h-full outline-none text-black placeholder-slate-400 text-xl px-5"
            />
            <button className="bg-red-600 h-full w-52 text-3xl flex items-center justify-center">
              Mulai <IoIosArrowDropright className="text-3xl" />
            </button>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen
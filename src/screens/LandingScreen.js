import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import bg from '../assets/img/bg.png'
import LoginScreen from './LoginScreen'

const LandingScreen = () => {
  const [signIn, setSignIn] = useState(false)
  return (
    <>
      <Navbar clickLogin={() => setSignIn(true)} />
      <div className="h-screen flex flex-col items-center justify-center border-b-8 border-gray-500" style={{
        backgroundImage: `url("${bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}>
        <div className='absolute h-screen bg-gradient-to-b from-black via-transparent to-black w-full'/>
        {signIn ? (
          <LoginScreen />
        ) : (
          <div className="absolute z-10 flex flex-col items-center justify-center space-y-6 text-white">
            <h1 className="text-3xl w-full font-bold text-center md:text-5xl text-red">
              Film, acara TV tak terbatas, dan lebih banyak lagi.
            </h1>
            <span className="text-xl md:text-3xl">
              Tonton di mana pun. Batalkan kapan pun.
            </span>
            <p className="text-md w-screen text-center md:text-xl">
              Siap menonton? Masukkan email untuk membuat atau memulai lagi
              keanggotaanmu.
            </p>
            <div className="flex items-center w-[70%] h-[3rem] md:w-[50rem] md:h-[5rem] bg-white">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow h-full outline-none text-black placeholder-slate-400 text-md md:text-xl px-5"
              />
              <button onClick={() => setSignIn(true)} className="bg-red-600 h-full w-32 md:w-52 text-md md:text-3xl flex items-center justify-center">
                Mulai
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LandingScreen
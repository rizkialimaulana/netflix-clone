import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

const MovieScreen = () => {
    const location = useLocation()
    const title = location.state.title
    const overview = location.state.overview
    const backdrop_path = location.state.background
  return (
    <>
      <Navbar />
      <div className="bg-black text-white">
        <div
          className="bg-fixed h-screen w-full flex items-center justify-center"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute h-screen bg-gradient-to-b from-black via-transparent to-black w-full" />
          <div className="absolute z-10 flex flex-col items-center space-y-6 w-[20rem] md:w-[40rem] backdrop-blur-lg p-4">
            <h1 className="text-3xl md:text-6xl font-bold text-center">{title}</h1>
            <p>{overview}</p>
          </div>
        </div>
        <div className='h-screen flex items-center justify-center'>
            <h1 className='text-3xl md:text-6xl'>STREAMING COMING SOON</h1>
        </div>
      </div>
    </>
  );
}

export default MovieScreen
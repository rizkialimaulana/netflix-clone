import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { BsStarFill } from 'react-icons/bs'

const MovieScreen = () => {
    const location = useLocation()
    const title = location.state.title
    const overview = location.state.overview
    const backdrop_path = location.state.background
    const poster_path = location.state.poster
    const vote = location.state.vote
    const date = location.state.release_date
    const count = location.state.count
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
          <div className="absolute z-10 flex items-center space-x-4 w-fit md:w-[40rem] backdrop-blur-lg p-4">
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt=""
              className="md:w-[20rem] md:h-[25rem] w-[10rem] h-auto"
            />
            <div className="flex flex-col space-y-3 md:space-y-4">
              <h1 className="text-xl md:text-3xl md:text-6xl font-bold">{title}</h1>
              <span className='text-md md:text-xl'>Release Date : {date}</span>
              <div className="flex items-center space-x-4">
                <BsStarFill className='w-[50] text-[#f5a700] '/>
                <span className='text-sm md:text-lg font-bold'>{vote}/10 ({count})</span>
              </div>
              <p className='text-xs md:text-md'>{overview}</p>
            </div>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-3xl md:text-6xl">STREAMING COMING SOON</h1>
        </div>
      </div>
    </>
  );
}

export default MovieScreen
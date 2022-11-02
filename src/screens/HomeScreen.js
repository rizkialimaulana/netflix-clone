import axios from '../axios';
import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import requests from '../requests';
import Row from '../components/Row';

const HomeScreen = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal)
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  }, [])

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div
          className="relative bg-fixed h-[40rem] w-full"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        />
        <div className="pl-10 absolute z-10 flex h-full w-full flex-col justify-center space-y-6 text-white">
          <h1 className="text-6xl font-bold">{movies.title}</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-lg text-red cursor-pointer transition-all hover:bg-red-600 backdrop-blur-md uppercase">
              play now
            </button>
            <button className="px-4 py-2 text-lg backdrop-blur-md cursor-pointer transition-all hover:bg-red-600 uppercase">
              My List
            </button>
          </div>
          <p className="text-md w-[20rem] md:w-[30rem]">{truncate(movies?.overview, 150)}</p>
        </div>
        <div className="absolute h-[40rem] bg-transparent w-full bg-gradient-to-b from-transparent to-black" />
      </div>
      <div className="h-full bg-black flex flex-col space-y-5 p-8">
        <Row 
          title="Netflix Originals"
          fetchURL={requests.fetchNetflixOriginal}
          isLargeRow  
        />
        <Row 
          title="Trending Now"
          fetchURL={requests.fetchTrending}
          isLargeRow  
        />
        <Row 
          title="Top Rated"
          fetchURL={requests.fetchTopRatedMovies}
          isLargeRow  
        />
        <Row 
          title="Action"
          fetchURL={requests.fetchActionMovies}
          isLargeRow  
        />
        <Row 
          title="Comedy"
          fetchURL={requests.fetchComedyMovies}
          isLargeRow  
        />
        <Row 
          title="Horror"
          fetchURL={requests.fetchHorrorMovies}
          isLargeRow  
        />
        <Row 
          title="Romance"
          fetchURL={requests.fetchRomanceMovies}
          isLargeRow  
        />
        <Row 
          title="Documenter"
          fetchURL={requests.fetchDocumentariesMovies}
          isLargeRow  
        />
      </div>
    </div>
  );
}

export default HomeScreen
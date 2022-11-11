import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { BsStarFill } from 'react-icons/bs'
import YouTube from 'react-youtube';
import axios from 'axios'
import { API_KEY } from '../requests';

const MovieScreen = () => {
    const [video, setVideo] = useState([])
    const [watch, setWatch] = useState([])
    const location = useLocation()
    const title = location.state.title
    const overview = location.state.overview
    const backdrop_path = location.state.background
    const poster_path = location.state.poster
    const vote = location.state.vote
    const date = location.state.release_date
    const count = location.state.count
    const movieId = location.state.id

    const opts = {
      height: '430',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    const mobile = {
      height: '215',
      width: '360',
      playerVars: {
        autoplay: 1,
      },
    };

    function _onReady(event) {
      event.target.pauseVideo();
    }

    useEffect(() => {
      async function fetchVideos() {
        try {
          const getVideo = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
          );
          setVideo(getVideo.data.results[0])
          return getVideo
        } catch (error) {
          console.log(error)  
        }
      }
      async function fetchMovie() {
        try {
          const getMovie = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`
          );
          setWatch(getMovie.data.results.GB)
          return getMovie
        } catch (error) {
          console.log(error)
        }
      }
      fetchVideos()
      fetchMovie()
    }, [movieId])
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
          <div className="flex flex-col md:flex-row items-center space-x-4 absolute z-10">
            <div className="flex items-center space-x-4 w-fit md:w-[40rem] backdrop-blur-lg p-4">
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
                className="md:w-[20rem] md:h-[25rem] w-[10rem] h-auto"
              />
              <div className="flex flex-col space-y-3 md:space-y-4">
                <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
                <span className="text-md md:text-xl">
                  Release Date : {date}
                </span>
                <div className="flex items-center space-x-4">
                  <BsStarFill className="w-[50] text-[#f5a700] " />
                  <span className="text-sm md:text-lg font-bold">
                    {vote}/10 ({count})
                  </span>
                </div>
                <p className="text-xs md:text-md">{overview}</p>
                <div className="flex items-center space-x-3">
                  {watch ? (
                    <a href={watch.link} className="w-full cursor-pointer text-center px-4 py-2 bg-red-600 transition-all duration-[250ms] hover:bg-red-800 text-sm md:text-md">
                      PLAY NOW
                    </a>
                  ) : (
                    <span className="w-full text-center px-4 py-2 bg-gray-600 transition-all duration-[250ms]">
                      NOT AVAILABLE
                    </span>
                  )}
                </div>
              </div>
            </div>
            <YouTube
              videoId={video?.key}
              opts={opts}
              className="hidden md:inline-flex"
              onReady={_onReady}
            />
          </div>
        </div>
        <div className="h-fit py-10 md:hidden flex items-center justify-center">
          <YouTube videoId={video?.key} opts={mobile} onReady={_onReady} />
        </div>
      </div>
    </>
  );
}



export default MovieScreen
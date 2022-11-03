import axios from '../axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Row = ({title, fetchURL, isLargeRow = false}) => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovie(request.data.results)
            return request
        }
        fetchData()
    }, [fetchURL])
    console.log(movie)
  return (
    <div className="flex flex-col space-y-4 text-white">
      <h1 className="text-xl uppercase font-bold">{title}</h1>
      <div className="flex flex-row items-center space-x-5 w-full overflow-x-scroll overflow-y-hidden scrollbar-none md:scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-black">
        {movie.map((item) => (
          <Card
            key={item.id}
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
            title={item.original_title || item.title}
            overview={item.overview}
            release_date={item.release_date}
            vote_average={item.vote_average}
            genre={item.genre_ids}
            vote_count={item.vote_count}
          />
        ))}
      </div>
    </div>
  );
}

export default Row
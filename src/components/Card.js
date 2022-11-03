import React from 'react'
import { useNavigate } from 'react-router-dom'
const Card = ({
  id,
  backdrop_path,
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
  genre,
  vote_count,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="min-w-[10rem] h-[15rem] cursor-pointer transition-transform duration-[450ms] hover:scale-105"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${poster_path}")`,
        backgroundPosition: "center center",
      }}
      onClick={() =>
        navigate("/movie", {
          state: {
            movieId: id,
            background: backdrop_path,
            poster: poster_path,
            title: title,
            overview: overview,
            release_date: release_date,
            vote: vote_average,
            genre: genre,
            count: vote_count
          },
        })
      }
    ></div>
  );
};

export default Card
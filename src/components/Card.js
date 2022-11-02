import React from 'react'

const Card = ({poster_path}) => {
  return (
    <div className='min-w-[10rem] h-[15rem] cursor-pointer transition-transform duration-[450ms] hover:scale-105' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${poster_path}")`,
        backgroundPosition: "center center"
    }}>

    </div>
  )
}

export default Card
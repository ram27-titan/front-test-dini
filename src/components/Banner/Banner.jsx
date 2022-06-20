import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../request';
import './banner.css';
import { GiRoundStar } from 'react-icons/gi';

const Banner = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.results);
      setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }

    fetchData();
  }, []);

  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
              https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
          )`,
        backgroundPosition: 'center center',
      }}
      className="text-white object-contain h-[448px]"
    >
      <div className="ml-[30px] pt-[140px] h-[190px] ">
        <h1 className="text-[3rem] font-bold ">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <button className="banner__button">Play</button>
          <button className="banner__button">Info</button>
        </div>
        <h1 className=" banner__description w-[45rem] font-bold pt-3 text-sm max-w-[360px] h-[80px] ">{truncate(movie?.overview, 150)}</h1>
        <h1 className="flex flex-row items-center justify-between w-[50px] mt-2 text-lg ">
          <GiRoundStar className=" text-yellow-400 " />
          {movie?.vote_average}
        </h1>
      </div>
      <div className="h-[7.4rem] mt-[150px] banner__fadebottom" />
    </header>
  );
};

export default Banner;

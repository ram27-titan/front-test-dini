import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../request';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const fetchUrl = requests.fetchRomanceMovies;
const base_url = 'https://image.tmdb.org/t/p/original/';

const RowRomance = () => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const video = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="text-white ml-[20px]">
      <h1 className="font-bold text-2xl ">Romance Movies</h1>

      <div className="row__posters flex flex-row overflow-x-scroll p-[20px]  ">
        {movies.map((movie) => (
          <img key={movie.id} onClick={() => handleClick(movie)} className="w-full max-h-[120px] mr-[20px] rounded-md hover:scale-[1.08] duration-[450ms]  " src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={video} />}
    </div>
  );
};

export default RowRomance;

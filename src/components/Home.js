import React from "react";
import movieImage from '../dp.jpg'
import {Description, MovieImage } from "../styles";
const Home = () => {
return (
    <div>
      <Description className="text">Top Rated IMDB Movies</Description>
      <MovieImage
        id="movie-image"
        alt="shop"
        src={movieImage}
      />
  </div>

);
};

export default Home;
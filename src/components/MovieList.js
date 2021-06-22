
//components
import MovieItem from "./MovieItem"
import SearchBar from "./SearchBar";
//styles
import { ListWrapper } from "../styles";
//useState
import { useState } from "react";
const MovieList =(props) => {

    const[query, setQuery]= useState("");
 
    const movieList= props.movies.filter((movie)=> movie.title.toLowerCase().includes(query.toLowerCase()))
    .map((movie)=>(
    <MovieItem 
    movie={movie}
    setMovie={props.setMovie}
    />
    ));
        
    return(
        <div>
            <SearchBar setQuery={setQuery} />
            <ListWrapper>{movieList}</ListWrapper>
        </div>
    );
  };
export default MovieList;


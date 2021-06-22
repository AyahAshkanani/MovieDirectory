//styles
import {DetailWrapper} from "../styles";

//libraries
import { useParams ,Redirect} from "react-router-dom";

const MovieDetail = (props) => {
    const movieSlug = useParams().movieSlug;
   const movie =  props.movies.find(movie => movie.slug === movieSlug);
   //if cake undefined redirect to list page
   if(!movie) return <Redirect to="/list"/>
    return (
        <DetailWrapper>
            <img src ={movie.poster} alt={movie.title}/>
            <p>Name: {movie.title}</p>
            <p>Genre: {movie.genre}</p>
            <p>Time of movie: {movie.runtime}</p>
            <p>Release year: {movie.released}</p>
            <p>About the Movie: {movie.plot}</p>
        </DetailWrapper>
    );
};
export default MovieDetail;
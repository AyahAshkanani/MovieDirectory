//styles
import { MovieWrapper,} from "../styles";
//libraries
import { Link } from "react-router-dom";

  const MovieItem = (props) => {
    
    return (
      <MovieWrapper>
      <Link to={`/list/${props.movie.slug}`}>
        <img src={props.movie.poster} alt={props.movie.title}/>
      </Link>
        <p>{props.movie.title}</p>
        <p className = "movie-genre">{props.movie.genre}</p>
      </MovieWrapper>
    );
  };
  export default MovieItem;
import './App.css';
// components
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import movies from "./movies";

//styles
import { GlobalStyle} from "./styles";
import { ThemeProvider } from "styled-components";

//use state
import { useState } from "react";

//Libraries
import {Route, Switch} from "react-router";


const theme = {
  light: {
    mainColor:"#A78A7F",
    backgroundColor:"#E7D7C1",
    red:"red",
  },
  dark: {
    mainColor:"#E7D7C1",
    backgroundColor:"#A78A7F", 
    red:"red",
  },
};
function App() {
  const[currentTheme, setCurrentTheme]= useState("light");
  //detail
  const[movie, setMovie]=useState(null);
  //list
  const[_movies, setMovies]= useState(movies);

  const toggleTheme=()=>{
    if(currentTheme === "light") setCurrentTheme("dark");
  else setCurrentTheme("light");
  }
  return(
    <div>
      <ThemeProvider theme ={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme}/>
        <Switch>
        <Route path="/list/:movieSlug">
          <MovieDetail movies={_movies} setMovie={setMovie} />
        </Route>
          <Route path="/list">
            <MovieList setMovie={setMovie} movies={_movies}  />
          </Route>
          <Route exact path ="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>   
    </div>
  );
}
export default App;

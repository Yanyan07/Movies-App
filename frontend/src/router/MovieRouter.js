import { Route, Routes } from "react-router-dom";
import MovieList from "../components/main/movielist/MovieList";
import MoviesByGenres from "../components/main/movies-genres/MoviesByGenres";
import MoviesByKeywords from "../components/main/movies-keywords/MoviesByKeywords";
import SignIn from "../components/main/register/SignIn";
import SignUp from "../components/main/register/SignUp";
import Logout from "../components/main/register/Logout";
import MovieNotFound from "../components/main/movie-not-found/MovieNotFound";
import MovieDetail from "../components/main/moviedetail/MovieDetail";
import MoviesByUser from "../components/main/movies-user/MoviesByUser";
import MovieUpdate from "../components/main/movie-change/MovieUpdate";
import MovieAdd from "../components/main/movie-change/MovieAdd";
import MovieError from "../components/main/movie-not-found/MovieError";

export default function MovieRouter(){
  return (
    <Routes>
      <Route path="/" element={<MovieList/>} />
      <Route path="/genres/:myinput" element={<MoviesByGenres/>} />
      <Route path="/keywords/:myinput" element={<MoviesByKeywords/>} />
      <Route path="/user/movies" element={<MoviesByUser/>} />
      <Route path="/detail/:mid" element={<MovieDetail/>} />
      <Route path="/update/:mid" element={<MovieUpdate/>} />
      <Route path="/add" element={<MovieAdd/>} />
      <Route path="/signin" element={<SignIn/>} />    
      <Route path="/signup" element={<SignUp/>} />    
      <Route path="/logout" element={<Logout/>} />    
      <Route path="/error" element={<MovieError/>} />        
      <Route path="*" element={<MovieNotFound/>} />        
    </Routes>
  )
}


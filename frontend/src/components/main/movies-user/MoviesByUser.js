import { useState,useEffect,useRef } from "react";
import axios from 'axios';
import PubSub from "pubsub-js";
import MovieNotFound from "../movie-not-found/MovieNotFound";
import "./MoviesByUser.css";

export default function MoviesByUser(){
  const [userMovies,setUserMovies] = useState([]);
  const [imgError,setImgError] = useState(false);
  const movieListRef = useRef();

  useEffect(()=>{
    const username = localStorage.getItem("username");
    if(username) {
      axios.get(`http://localhost:8088/user/movies/${username}`).then((response)=>{
        setUserMovies(response.data);
      })
    }
  },[])
  useEffect(() => {
    if(userMovies && userMovies.length>0){
      const len = movieListRef.current.children.length;
      if(len < 6) {
        movieListRef.current.style.height = 900 + "px";
      }
    }
  },[userMovies])

  const deleteMovie = (movieId) => {
    const username = localStorage.getItem("username");
    axios.post("http://localhost:8088/user/movie/delete",{username: username+" "+movieId}).then((response)=>{
      setUserMovies(response.data);
      PubSub.publish("movie-delete", response.data);
    })
  }

  return (
    <div className="movie-genres">
      {
        userMovies.length===0 ? 
        <MovieNotFound /> :
        <div>
          <div className="list-genres">Favorite Movies</div>
          <div className="movie-top clearfix">
            <span>Title</span>
            <span>Rating</span>
          </div>
          <div ref={movieListRef} className="keywords-list">
            {
              userMovies.map((movie,index) => {
                return <div className="movie-item" key={movie.id}>
                  <img className="movie-info" src={(!imgError)? process.env.PUBLIC_URL+`/images/${movie.imgUrl}`: process.env.PUBLIC_URL+"/images/clover.png"}
                      alt="movie-pic"
                      onError={()=>setImgError(true)}
                  />
                  <div className="movie-info title">{index+1}. {movie.name}</div>
                  <div className="movie-info year">({movie.releasedYear})</div>
                  <div className="movie-info rate">⭐️&nbsp;  
                    {
                      movie.rate.toString().length<2 ?
                      movie.rate+".0" :
                      movie.rate
                    }
                  </div>
                  <button className="remove-btn" onClick={()=>deleteMovie(movie.id)}>remove</button>
                </div>
              })    
            }
          </div>
        </div>
      }
    </div>
  )
}
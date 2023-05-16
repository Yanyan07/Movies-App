import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./MoviesByGenres.css";
import MovieNotFound from "../movie-not-found/MovieNotFound";

export default function MoviesByGenres(){
  const [genresMovies,setGenresMovies] = useState([]);
  const [imgError,setImgError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8088/movies/genres/${params.myinput}`).then(
      response => {
        setGenresMovies(response.data);
      },
      error => {
        console.log(error.message);
      }
    )
  },[params.myinput])

  const showDetail = (movieId)=>{
    navigate(`/detail/${movieId}`);
  }

  return (
    <div className="movie-genres">
      {
        genresMovies.length===0 ? 
        <MovieNotFound /> :
        <div>
          <div className="list-genres">{params.myinput.charAt(0).toUpperCase() + params.myinput.substring(1)} Movies</div>
          <div className="movie-top clearfix">
            <span>Title</span>
            <span>Rating</span>
          </div>
          {
            genresMovies.map((movie,index) => {
              return <div className="movie-item" key={movie.id} onClick={()=>showDetail(movie.id)}>
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
              </div>
            })    
          }
        </div>
      }
    </div>
  )
}

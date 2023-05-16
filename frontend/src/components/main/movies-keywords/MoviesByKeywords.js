import { useState,useEffect,useRef } from "react";
import axios from 'axios';
import MovieNotFound from "../movie-not-found/MovieNotFound";
import { useNavigate, useParams } from "react-router-dom";

export default function MoviesByKeywords(){
  const [keywordsMovies,setKeywordsMovies] = useState([]);
  const [imgError,setImgError] = useState(false);
  const movieListRef = useRef();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8088/movies/name/${params.myinput}`).then(
      response => {
        setKeywordsMovies(response.data);
      },
      error => {
        console.log(error.message);
      }
    )
  },[params.myinput])
  useEffect(() => {
    if(keywordsMovies && keywordsMovies.length>0){
      const len = movieListRef.current.children.length;
      if(len < 6) {
        movieListRef.current.style.height = 900 + "px";
      }
    }
  },[keywordsMovies])

  const showDetail = (movieId)=>{
    navigate(`/detail/${movieId}`);
  }

  return (
    <div className="movie-genres">
      {
        keywordsMovies.length===0 ? 
        <MovieNotFound /> :
        <div>
          <div className="list-genres">Movies with keywords: {params.myinput}</div>
          <div className="movie-top clearfix">
            <span>Title</span>
            <span>Rating</span>
          </div>
          <div ref={movieListRef} className="keywords-list">
            {
              keywordsMovies.map((movie,index) => {
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
        </div>
      }
    </div>
  )
}


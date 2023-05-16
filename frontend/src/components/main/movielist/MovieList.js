import { useState,useEffect,useRef } from "react";
import axios from "axios";
import "./MovieList.css";
import { useNavigate } from "react-router-dom";
import MovieNotFound from "../movie-not-found/MovieNotFound";

export default function Movie(){
  const [genres,setGenres] = useState([]);
  const [indexObj, setIndexObj] = useState({
    action: 0,
    comedy: 0,
    drama: 0,
    fantasy: 0,
    horror: 0,
    mystery: 0,
    romance: 0
  });
  const [genresObj, setGenresObj] = useState({
    action: [],
    comedy: [],
    drama: [],
    fantasy: [],
    horror: [],
    mystery: [],
    romance: []
  })
  const [imgError,setImgError] = useState(false);
  const movieList = useRef({});
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get("http://localhost:8088/genres").then((response)=>{
      setGenres(response.data);
      response.data.forEach((genres) => {  
        axios.get(`http://localhost:8088/movies/genres/${genres.name}`).then((res)=>{
          setGenresObj((genresObj) => ({
            ...genresObj, [genres.name]:res.data
          }));
        })
      })
    });
  },[]);
  useEffect(()=>{
    if(genres.length > 0){
      genres.forEach((g) => {
        if(movieList.current[g.name]) {
          const children = movieList.current[g.name].children;
          movieList.current[g.name].style.width = 240*children.length + "px";   
        }
      })
    }
  },[genres,genresObj])
  
  const getPrev = (dire, genresName)=>{
    const styles = getComputedStyle(movieList.current[genresName]);
    const movieListLeft = styles.left;
    const leftValue = parseInt(movieListLeft);
    const children = movieList.current[genresName].children;
    const newIndexObj = Object.assign({}, indexObj);
    if(dire==="pre" && children.length-indexObj[genresName]>5){
      movieList.current[genresName].style.left = leftValue - 240 + "px";
      newIndexObj[genresName] = indexObj[genresName] + 1;
    }
    if(dire==="next" && indexObj[genresName]>0){
      movieList.current[genresName].style.left = leftValue + 240 + "px";
      newIndexObj[genresName] = indexObj[genresName] - 1;
    }
    setIndexObj(newIndexObj);
  }

  const showDetail = (movieId)=>{
    navigate(`/detail/${movieId}`);
  }

  return (
    <div className="movie-container">
      {
        genres.length===0 ? 
        <MovieNotFound /> :
        genres.map((genres)=>{
          return <div className="genres clearfix" key={genres.id}>
            <div className="genres-name">{genres.name}</div> 
            <ul ref={(node)=>{movieList.current[genres.name] = node;}} className="movie-ul">
              {
                genresObj[genres.name].length===0 ? 
                <MovieNotFound /> :
                genresObj[genres.name].map((movie)=>{
                  return <li key={movie.id} className="movie-list" onClick={()=>showDetail(movie.id)} >
                    <img src={(!imgError)? process.env.PUBLIC_URL+`/images/${movie.imgUrl}`: process.env.PUBLIC_URL+"/images/clover.png"}
                        alt="movie-pic"
                        onError={()=>setImgError(true)}
                    />
                    <div>{movie.name}</div>                  
                  </li>
                })
              }
            </ul>
            <div>
              <div className="pre-arrow arrow" onClick={()=>{getPrev("pre", genres.name)}}>
                <img src="images/arrow.jpeg" alt="movie-pic" />
              </div>
              <div className="post-arrow arrow" onClick={()=>{getPrev("next", genres.name)}}>
                <img src="images/arrow.jpeg" alt="movie-pic" />
              </div>
            </div>          
          </div>
        })
      }
    </div>
  )
}


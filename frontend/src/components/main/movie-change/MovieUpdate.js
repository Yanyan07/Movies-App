import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./MovieChange.css";

export default function MovieUpdate() {
  const params = useParams();
  const [movie,setMovie] = useState(null);
  const [genresStr,setGenresStr] = useState("");
  const [movieInfo,setMovieInfo] = useState({
    name: "",
    description: "",
    imgUrl: "",
    minutes: 0,
    releasedYear: 0,
    rate: 0,
    isAvailable: ""
  })
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:8088/movies/movie/${params.mid}`).then((response)=>{
      setMovie(response.data);
    })
  },[])

  const getInfo = (e,movieData)=>{
    if(movieData === "genres") {
      setGenresStr(e.target.value);
    }else {
      movieInfo[movieData] = e.target.value; 
      setMovieInfo(movieInfo);
    }
  }
  const handleUpdate = () => {
    for(const key in movieInfo){
      if(!movieInfo[key]) {
        movieInfo[key] = movie[key];
      }
    }
    setMovieInfo(movieInfo);

    let gStr = "";
    for(const g of movie.genres) {
      gStr += g.name;
    }
    if(!genresStr) {
      axios.put(`http://localhost:8088/movies/movie/${movie.id}/${gStr}`, movieInfo, movie.id, gStr).then((response)=>{
        setMovie(response.data);
        navigate(`/detail/${movie.id}`);
      }, error=>{
        console.log("error: ", error.message);
      })
    }else {
      axios.put(`http://localhost:8088/movies/movie/${movie.id}/${genresStr}`, movieInfo, movie.id, genresStr).then((response)=>{
        setMovie(response.data);
        navigate(`/detail/${movie.id}`);
      }, error=>{
        console.log("error: ", error.message);
      })
    }
  }

  return (
    movie===null ? 
    null :
    <div className="sign-in">
      <h1>Update Movie</h1>
      <div>
        <input type="text" placeholder={movie.name} onChange={(e)=>getInfo(e,"name")} />
      </div>
      <div>
        <input type="text-area" placeholder={movie.description} onChange={(e)=>getInfo(e,"description")} />
      </div>
      <div>
        <input type="text" placeholder={movie.imgUrl} onChange={(e)=>getInfo(e,"imgUrl")} />
      </div>
      <div>
        <input type="number" placeholder={movie.minutes} onChange={(e)=>getInfo(e,"minutes")} />
      </div>
      <div>
        <input type="number" placeholder={movie.releasedYear} onChange={(e)=>getInfo(e,"releasedYear")} />
      </div>
      <div>
        <input type="text" placeholder={movie.rate} onChange={(e)=>getInfo(e,"rate")} />
      </div>
      <div>
        <input type="text" placeholder={movie.isAvailable.toString()} onChange={(e)=>getInfo(e,"isAvailable")} />
      </div>
      <div>
        <input type="text" placeholder={movie.genres.map((g)=>{return g.name})} onChange={(e)=>getInfo(e,"genres")} />
      </div>
      <button className="pin update" onClick={handleUpdate}>Update</button>
    </div>
  )
}

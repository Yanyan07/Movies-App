import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
export default function MovieAdd(){
  const [genresStr,setGenresStr] = useState("");
  const [movieInfo,setMovieInfo] = useState({
    name: "",
    description: "",
    imgUrl: "",
    minutes: 0,
    releasedYear: 0,
    rate: 0
  })
  const navigate = useNavigate();

  const getInfo = (e,movieData)=>{
    if(movieData === "genres") {
      setGenresStr(e.target.value);
    }else {
      movieInfo[movieData] = e.target.value; 
      setMovieInfo(movieInfo);
    }
  }
  const handleAdd = ()=>{
    axios.post(`http://localhost:8088/movies/movie/${genresStr}`, movieInfo).then((response)=>{
      navigate(`/detail/${response.data.id}`);
    },
    error => {
      console.log(error.message);
      navigate("/error");
    })
  }
  return (
    <div className="sign-in">
      <h1>New Movie</h1>
      <div>
        <input type="text" placeholder="title" onChange={(e)=>getInfo(e,"name")} />
      </div>
      <div>
        <input type="text-area" placeholder="description" onChange={(e)=>getInfo(e,"description")} />
      </div>
      <div>
        <input type="text" placeholder="image url" onChange={(e)=>getInfo(e,"imgUrl")} />
      </div>
      <div>
        <input type="number" placeholder="minutes" onChange={(e)=>getInfo(e,"minutes")} />
      </div>
      <div>
        <input type="number" placeholder="released year" onChange={(e)=>getInfo(e,"releasedYear")} />
      </div>
      <div>
        <input type="text" placeholder="rate" onChange={(e)=>getInfo(e,"rate")} />
      </div>
      <div>
        <input type="text" placeholder="genres" onChange={(e)=>getInfo(e,"genres")} />
      </div>
      <button className="pin" onClick={handleAdd}>Add New Movie</button>
    </div>
  )
}
// Dil Bechara, 2020, 101, comedy drama romance, 8.4
// The emotional journey of two hopelessly-in-love youngsters; a young girl, Kizie, who is suffering from cancer; and Manny, a boy Kizie meets at a support group.

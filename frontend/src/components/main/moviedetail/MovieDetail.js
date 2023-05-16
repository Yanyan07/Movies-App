import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PubSub from 'pubsub-js';
import './MovieDetail.css';

export default function MovieDetail(){
  const [movie,setMovie] = useState();
  const [imgError,setImgError] = useState(false);
  const [isDelete,setIsDelete] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:8088/movies/movie/${params.mid}`).then((response)=>{
      setMovie(response.data);
    })
  },[])

  const handleAdd = ()=>{
    const username = localStorage.getItem("username");
    if(!username) {
      navigate("/signin");
    }else{
      axios.post("http://localhost:8088/user/movies",{username: username+" "+movie.id}).then((response)=>{
        PubSub.publish("movie-add", response.data);
        // console.log("add movie to user: ", response.data); //true
      })
    }
  }
  const handleNew = ()=>{
    navigate('/add');
  }
  const handleUpdate = ()=>{
    navigate(`/update/${movie.id}`);
  }
  const handleDelete = ()=>{
    setIsDelete(true);
  }
  const deleteProcess = ()=>{
    axios.delete(`http://localhost:8088/movies/movie/${movie.id}`).then((response)=>{
      navigate('/');
    }) 
  }

  return (
    movie===undefined ? null :
    <div className="movie-detail">
      <h2 className="title">{movie.name}</h2>
      <div className="clearfix">
        <div className="year">{movie.releasedYear} -</div>
        <div className="minutes">{movie.minutes}m</div>
        <div className="rate">
          <div>rating:</div>
          <div>⭐️ <span>
          {
            movie.rate.toString().length<2 ?
            movie.rate+".0" :
            movie.rate
          }
          </span>/10</div>
        </div>
      </div>
      <div className="img">
        <img src={(!imgError)? process.env.PUBLIC_URL+`/images/${movie.imgUrl}`: process.env.PUBLIC_URL+"/images/clover.png"}
             alt="movie-pic"
             onError={()=>setImgError(true)}
         />
      </div>
      <div className="detail-genres">
        {
          movie.genres.map((genres) => {
            return <button key={genres.id}>
              {genres.name}
            </button>
          })
        }
      </div>
      <div className="desc">{movie.description}</div>
      <button className="pin" onClick={handleAdd}>Add to Cart</button>
      {
        localStorage.getItem("role")==="admin" ? 
        <span>
          <button className="pin" onClick={handleNew}>New Movie</button>
          <button className="pin update" onClick={handleUpdate}>Update</button>
          <button className="pin delete" onClick={handleDelete}>Delete</button>
          {
            isDelete ? 
            <button className="pin delete" onClick={deleteProcess}>Are you sure to delete?</button> : 
            null
          }
        </span> :
        null
      }
    </div>
  )
}

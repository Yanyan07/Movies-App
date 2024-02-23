import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PubSub from "pubsub-js";
import "./Header.css";

export default function Header(){
  const [selectValue,setSelectValue] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [userMovies,setUserMovies] = useState([]);
  const [changeCount,setChangeCount] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const username = localStorage.getItem("username");
    PubSub.subscribe("movie-add", (_,movieList)=>{
      setChangeCount(!changeCount);
    });
    PubSub.subscribe("movie-delete", (_,movieDelete)=>{
      setChangeCount(!changeCount);
    });
    PubSub.subscribe("change-user", (_,userData)=>{
      setChangeCount(!changeCount);
    })
    if(username) {
      axios.get(`http://localhost:8088/user/movies/${username}`).then((response)=>{
        console.log("get movies of user: ", response.data);
        setUserMovies(response.data);
      })
    }
  },[changeCount])

  const goHome = () => {
    navigate("/");
  }
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  }
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }
  const handleClick = () => {
    selectValue==="all" ? navigate("/") :
    selectValue==="genres" ? navigate(`/genres/${inputValue}`) :
    selectValue==="keywords" ? navigate(`/keywords/${inputValue}`) :
    navigate("*");
    setInputValue("");
  }
  const handleKeyDown = (e)=>{
    if(e.keyCode === 13) {
      handleClick();
    }
  }
  const handleSignIn = () => {
    navigate("/signin");
  }
  const handleLogout = () => {
    navigate("/logout");
  }
  const showUserMovies = () => {
    navigate("/user/movies");
  }

  return (
    <div className="header">
      <div className="logo-container" onClick={goHome}>
        <img className="logo" src={process.env.PUBLIC_URL+"/images/clover.png"} alt="clover"/>
        <span className="logo-span">Clover App</span>
      </div>

      <select value={selectValue} onChange={handleSelect}>
        <option value="all">all</option>
        <option value="genres">genres</option>
        <option value="keywords">keywords</option>
      </select>
      <input className="search" placeholder="Search Movies" value={inputValue} onChange={handleInput} onKeyDown={handleKeyDown} />
      <button className="logo-search" onClick={handleClick}>
        <img className="search-img" src={process.env.PUBLIC_URL+"/images/search.png"} alt="search"/>
      </button>

      <span className="cart sign-container" >Cart</span>
      {
        localStorage.getItem("username") &&
        <span className="count" onClick={showUserMovies}>{userMovies.length}</span>
      }
      <img className="cart-img sign-container" src={process.env.PUBLIC_URL+"/images/cart.png"} alt="cart" onClick={showUserMovies} />
      {
        !localStorage.getItem("username") ?
          <span className="sign sign-container" onClick={handleSignIn}>Sign In</span> :
        <span>
          <span className="logout sign-container" onClick={handleLogout}>💚Logout</span> 
          <span className="sign-container">Hello,{localStorage.getItem("username").charAt(0).toUpperCase()+localStorage.getItem("username").substring(1)}</span>
        </span>
      }  
    </div>
  )
}


import { useState } from "react";
import axios from "axios";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import PubSub from 'pubsub-js';

export default function SignIn(){
  const [userInput,setUserInput] = useState({
    username: "",
    password: ""
  })
  const [isErrorUser,setIsErrorUser] = useState(false);
  const navigate = useNavigate();

  const getInfo = (e,userinfo)=>{
    userInput[userinfo] = e.target.value;
    setUserInput(userInput);
  }
  const handleClick = ()=>{
    axios.get(`http://localhost:8088/user/${userInput.username}/${userInput.password}`).then(
      response=>{
        setIsErrorUser(false);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
        PubSub.publish("change-user",response.data);
        navigate("/");
      },
      error => {
        console.log("error: ", error.message);
        setIsErrorUser(true);
      }
    )
  }
  const handleSignUp = ()=>{
    navigate("/signup");
  }

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      {
        isErrorUser ? 
        <div>
          <button>Sorry, we can't find an account with this username and password. Please try again or create a new account.</button>
        </div> :
        null
      }
      <div>
        <input placeholder="Username" onChange={(e)=>getInfo(e,"username")} />
      </div>
      <div>
        <input placeholder="Password" onChange={(e)=>getInfo(e,"password")} />
      </div>
      <button className="pin" onClick={handleClick}>Sign In</button>
      <div className="sign-register">New to Clover App? <span onClick={handleSignUp}>Sign up now.</span></div>
    </div>
  )
}

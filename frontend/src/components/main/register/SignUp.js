import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PubSub from 'pubsub-js';

export default function SignUp(){
  const [user,setUser] = useState({
    username: "",
    password: "",
    email: "",
    role: ""
  })
  const navigate = useNavigate();
  const getInfo = (e,userinfo)=>{
    user[userinfo] = e.target.value;
    setUser(user);
  }
  const handleSignUp = ()=>{
    axios.post("http://localhost:8088/user",user).then((response)=>{
      localStorage.setItem("username",response.data.username);
      localStorage.setItem("role",response.data.role);
      PubSub.publish("change-user",response.data);
      setTimeout(()=>{
        navigate("/");
      },1000)
    })
  }

  return (
    <div className="sign-in">
      <h1>Sign Up</h1>
      <div>
        <input type="text" placeholder="Username" onChange={(e)=>getInfo(e,"username")} />
      </div>
      <div>
        <input type="password" placeholder="Password" onChange={(e)=>getInfo(e,"password")} />
      </div>
      <div>
        <input type="text" placeholder="Email" onChange={(e)=>getInfo(e,"email")} />
      </div>
      <div>
        <input type="text" placeholder="Role(user or admin)" onChange={(e)=>getInfo(e,"role")} />
      </div>
      <button className="pin" onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

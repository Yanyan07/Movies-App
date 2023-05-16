import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Logout(){
  const navigate = useNavigate();
  useEffect(()=>{
    const user = localStorage.getItem("username");
    if(user) {
      setTimeout(()=>{
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        navigate("/");
      }, 1000)
    }
  },[])

  return (
    <div className="sign-in">
      <h1>
        {localStorage.getItem("username").charAt(0).toUpperCase()+localStorage.getItem("username").substring(1)} 
        &nbsp;&nbsp;Logout!
      </h1>
    </div>
  )
}
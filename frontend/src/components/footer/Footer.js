import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer(){
  const navigate = useNavigate();
  
  const goHome = () => {
    navigate("/");
  }
  return (
    <div className="footer">
      <div className="logo-container"  onClick={goHome}>
        <img className="logo" src={process.env.PUBLIC_URL+"/images/clover.png"} alt="clover"/>
        <span className="logo-span">Clover App</span>
      </div>
      <div className="copy-right">
        <p>Clover App is dedicated to provide excellent movies</p>
        <p>@April-01-2023 Clover App. All rights reserved</p>
      </div>
    </div>
  )
}
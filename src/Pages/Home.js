import { NavLink } from "react-router-dom";
import "../Styles/Home.css"; 

export const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src="/Event Management System.jpeg" alt="Banner" className="banner-image" />
      </div>
      <div className="Cotent">
        <h1>Welcome to Event Management System</h1>
        <NavLink to={"/home"}>
        <button className="explore-btn">Explore</button></NavLink>
      </div>
    </div>
  );
}
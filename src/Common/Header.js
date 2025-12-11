import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <NavLink to={"/"}>
          <img src="https://th.bing.com/th/id/OIP.yWHx_-aieLskgCcgT4Nn4gHaHa?w=177&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt=""/>
        </NavLink>
       
        <div className="links">
          <NavLink to={"/"}> Home </NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/add"}> Add</NavLink>
          <NavLink to={"/edit"}> Edit </NavLink>
          <NavLink to={"/viewall"}> View</NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;

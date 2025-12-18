import { NavLink } from "react-router-dom";
import "./../Styles/login.css";
export const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <h2>Login Page</h2>
        <label>Email</label>
        <input type="email" placeholder="Email" required></input>
        <label>Password</label>
        <input type="password" placeholder="Password" required></input>
        <button className="loginButton" type="submit">
          Submit
        </button>
        <NavLink to={"/register"}>
          <button className="login_reg_btn ">
          Create New Account
        </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
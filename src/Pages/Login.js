import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./../Styles/login.css";

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://backend-qg3x.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.data));
        navigate('/dashboard');
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Page</h2>
        <label>Email</label>
        <input {...register("email")} type="email" placeholder="Email" required></input>
        <label>Password</label>
        <input {...register("password")} type="password" placeholder="Password" required></input>
        <button className="loginButton" type="submit">
          Submit
        </button>
        <NavLink to={"/register"}>
          <button className="login_reg_btn " type="button">
          Create New Account
        </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
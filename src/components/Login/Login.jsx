import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth-context";
import "./Login.css";
export const Login = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className="login-card">
      <h3>Login</h3>
      <form>
        <label>Username</label>
        <input type="text" placeholder="Username" required />
        <label>Password</label>
        <input type="password" placeholder="Password" required />
        <Link
          to="/home"
          className="login-button"
          onClick={authContext.login}
          // onClick={setIsLoggedIn(true)}
        >
          Login
        </Link>
      </form>
    </div>
  );
};

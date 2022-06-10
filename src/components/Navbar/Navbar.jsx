import React, { useContext } from "react";

import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../auth-context";
import "./Navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  return (
    <>
      <div className="main-header">
        <h1>User List</h1>

        {authContext.isLoggedIn ? (
          <Link
            to="/"
            className="button"
            onClick={authContext.logout}
          >
            Logout
          </Link>
        ) : null}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

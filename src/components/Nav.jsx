import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate, NavLink } from "react-router-dom";

const Nav = (props) => {
  const [redirect, setRedirect] = useState(false);
  const logout = async () => {};

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  let menu;

  if (props.user?.id) {
    console.log(props.user);
    menu = (
      <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {/* <Link to={"/"} className="btn me-2">
          Home
        </Link>
        <Link to={"/search"} className="btn me-2">
          Search
        </Link> */}
        <Link to={"/profile"} className="btn me-2">
          Profile
        </Link>
      </div>
    );
  } else {
    menu = (
      <div className="col-md-3 text-end">
        <Link to={"/login"} className="btn me-2">
          Login
        </Link>
      </div>
      // </div>
    );
  }
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="/" exact className={({ isActive }) => (isActive ? "nav-link px-2 link-dark" : "nav-link px-2 link-secondary")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink tosearch className={({ isActive }) => (isActive ? "nav-link px-2 link-dark" : "nav-link px-2 link-secondary")}>
              Search
            </NavLink>
          </li>
        </ul>
        {menu}
      </header>
    </div>
  );
};

export default connect((state) => ({
  user: state.user,
}))(Nav);

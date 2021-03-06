import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
import logo from "./../../images/logo3.png";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg">
      <div className="container">
      <Link className="navbar-brand text-light" to="/">
            <img src={logo} alt="logo" />
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 text-end fs-5 mb-lg-0">
          <li className="nav-item">
                <Link
                  className="nav-link active text-light  "
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light">
                  About
                </Link>
              </li>
              {user?.displayName && (
                <li className="nav-item">
                  <Link to="/myOrders" className="nav-link text-light">
                    My-Orders
                  </Link>
                </li>
              )}
              {user?.displayName && (
                <li className="nav-item">
                  <Link to="/manageOrders" className="nav-link text-light">
                    Manage-Orders
                  </Link>
                </li>
              )}
              {user?.displayName && (
                <li className="nav-item">
                  <Link to="/addNewService" className="nav-link text-light">
                    Add-A-New-Service
                  </Link>
                </li>
              )}
          </ul>
          <div className="navbar-text text-end">
            <small className="my-auto fs-5 me-2 text-light">
              {user?.displayName}
            </small>
            {user?.email ? (
              <Link
                onClick={logOut}
                className=" text-decoration-none my-auto"
                to="/home"
              >
                <button className="btn btn-light fs-5"> Logout</button>
              </Link>
            ) : (
              <Link
                className="text-decoration-none fs-5 text-light"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

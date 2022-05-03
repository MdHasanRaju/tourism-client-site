import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
import logo from "./../../images/logo3.png";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg bg-light nav-bg">
    //     <div className="container">
          // <Link className="navbar-brand text-light" to="/">
          //   <img src={logo} alt="" />
          // </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div
    //         className="collapse navbar-collapse"
    //         id="navbarSupportedContent"
    //       >
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              // <li className="nav-item">
              //   <Link
              //     className="nav-link active text-light"
              //     aria-current="page"
              //     to="/home"
              //   >
              //     Home
              //   </Link>
              // </li>
              // <li className="nav-item">
              //   <Link to="/about" className="nav-link text-light">
              //     About us
              //   </Link>
              // </li>
              // {user?.displayName && (
              //   <li className="nav-item">
              //     <Link to="/myOrders" className="nav-link text-light">
              //       My Orders
              //     </Link>
              //   </li>
              // )}
              // {user?.displayName && (
              //   <li className="nav-item">
              //     <Link to="/manageOrders" className="nav-link text-light">
              //       Manage Orders
              //     </Link>
              //   </li>
              // )}
              // {user?.displayName && (
              //   <li className="nav-item">
              //     <Link to="/addNewService" className="nav-link text-light">
              //       Add A New Service
              //     </Link>
              //   </li>
              // )}
    //         </ul>
    // <form className="d-flex justify-content-center fs-5">
    //   <small className="my-auto fs-5 me-2 text-light">{user?.displayName}</small>
    //   {user?.email ? (
    //     <Link onClick={logOut} className=" text-decoration-none fs-5 my-auto"  to="/home">
    //      <button className='btn btn-light fs-4'> logout</button>
    //     </Link>
    //   ) : (
    //     <Link className="text-decoration-none fs-4 text-light"  to="/login">
    //       Login
    //     </Link>
    //   )}
    // </form>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    <nav class="navbar navbar-expand-lg navbar-light nav-bg">
      <div class="container">
      <Link className="navbar-brand text-light" to="/">
            <img src={logo} alt="" />
          </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 fs-5 mb-lg-0">
          <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light">
                  About us
                </Link>
              </li>
              {user?.displayName && (
                <li className="nav-item">
                  <Link to="/myOrders" className="nav-link text-light">
                    My Orders
                  </Link>
                </li>
              )}
              {user?.displayName && (
                <li className="nav-item">
                  <Link to="/manageOrders" className="nav-link text-light">
                    Manage Orders
                  </Link>
                </li>
              )}
              {user?.displayName && (
                <li className="nav-item">
                  <Link to="/addNewService" className="nav-link text-light">
                    Add A New Service
                  </Link>
                </li>
              )}
          </ul>
          <div class="navbar-text">
            <small className="my-auto fs-5 me-2 text-light">
              {user?.displayName}
            </small>
            {user?.email ? (
              <Link
                onClick={logOut}
                className=" text-decoration-none fs-5 my-auto"
                to="/home"
              >
                <button className="btn btn-light fs-4"> Logout</button>
              </Link>
            ) : (
              <Link
                className="text-decoration-none fs-4 text-light"
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

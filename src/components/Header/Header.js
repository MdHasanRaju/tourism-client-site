import React from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Travel-World
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About us
                  </Link>
                </li>
                {user?.displayName && (
                  <li className="nav-item">
                    <Link to="/myOrders" className="nav-link">
                      My Orders
                    </Link>
                  </li>
                )}
                {user?.displayName && (
                  <li className="nav-item">
                    <Link to="/manageOrders" className="nav-link">
                      Manage Orders
                    </Link>
                  </li>
                )}
                {user?.displayName && (
                  <li className="nav-item">
                    <Link to="/addNewService" className="nav-link">
                      Add A New Service
                    </Link>
                  </li>
                )}
              </ul>
              <form className="d-flex">
                {/* <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                /> */}
                <small className="my-auto me-2">{user?.displayName}</small>
                {user?.email ? (
                  <Link to="/home">
                    <button className="btn btn-outline-danger" onClick={logOut}>
                      Log out
                    </button>
                  </Link>
                ) : (
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;
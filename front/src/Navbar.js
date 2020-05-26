import React from "react";
import { Link } from "react-router-dom";
import room from "./components/location.png";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <a className="navbar-brand" href="/">
        <img src={room} width="35" height="35"/> Room8
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/feed"><a className="nav-item nav-link active">
              Home <span className="sr-only">(current)</span>
            </a>
            </Link>
         
            {props.user? <Link to="/chat"><a className="nav-item nav-link active">Messages</a></Link>
            : ""}

            {props.user ? (
              <Link to="/profile">
                <a className="nav-item nav-link active">Add Offer</a>
              </Link>
            ) : (
              <Link to="/login">
                <a className="nav-item nav-link active">Login</a>
              </Link>
            )}
            {props.user? <Link to="/logout"><a className="nav-item nav-link active">Logout</a></Link>
            : ""}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

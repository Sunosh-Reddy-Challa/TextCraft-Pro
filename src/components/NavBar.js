import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>TextCraft Pro</strong>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  <strong>About</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`form-check form-switch mx-5 text - ${
            props.mode === "light" ? "dark text-dark" : "light"
          } text-light`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            DarkMode
          </label>
        </div>
      </nav>
    </div>
  );
}

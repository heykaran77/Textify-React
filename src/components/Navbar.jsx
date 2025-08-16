import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (prop) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={`${prop.mode}`}>
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => {
              {
                document.title = "Textify - Home";
              }
            }}>
            <b>
              <i>{prop.title}</i>
            </b>
          </Link>
          {/* <Link
            className="navbar-brand"
            to="/"
            onClick={() => {
              {
                document.title = "Textify - Home";
              }
            }}>
            <b>
              <i>{prop.title}</i>
            </b>
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    {
                      document.title = "Textify - Home";
                    }
                  }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/about"
                  onClick={() => {
                    {
                      document.title = "Textify - About";
                    }
                  }}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* <label
              className={`form-check-label text-${
                prop.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="switchCheckDefault">
              Enable Dark Mode
            </label> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Lorem Title",
};

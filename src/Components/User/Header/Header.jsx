import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to={""}>
            <img
              className="govLogo"
              src="https://gad.kerala.gov.in/sites/default/files/inline-images/kerala%20final%20emblem_0.jpg"
            ></img>
             <span className="mx-2">Ente panchayath</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={""}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={""}>
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={""}>
                  Bill payment
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to={""}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Certificates
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to={""}>
                    Birth certificate
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={""}>
                    Death certificate
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={""}>
                    Marriage certificate
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={""}>
                  Complaint
                </Link>
              </li>
            </ul>
          </div>
        <button className="loginBtn">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;

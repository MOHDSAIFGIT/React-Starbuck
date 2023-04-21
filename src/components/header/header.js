import React from "react";
import logo from "../../images/logo.png";
import first from "../../images/account_thin.svg";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <a className="navbar-brand " href="#">
            <img src={logo} />
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gift
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pay
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Store
                </a>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <input
                className=" search-main form-control me-2 rounded-5 pe-5 "
                type="search"
                placeholder="looking for something specific?"
                aria-label="Search"
              />
            </form>

            <div className="user-icon">
              <img src={first} alt="user-icon" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

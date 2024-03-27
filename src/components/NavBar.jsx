import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm"
        style={{ position: "fixed", top: "0", width: "100%", zIndex: " 1000" }}
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            דבש תבלינים
          </NavLink>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  צור קשר
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  קצת עלינו
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  מוצרים
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  דף הבית
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/register" className="btn btn-outline-dark">
                <i className="fa fa-user-plus m-1"></i>
                הרשמה
              </NavLink>
              <NavLink to="/login" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in m-1"></i>
                התחבר
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart m-1"></i>
                עגלה
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

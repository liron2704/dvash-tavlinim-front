import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/navBar.css";

export default function NavBar(props) {
  // State to manage the collapse status of the navbar
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to toggle the collapse status of the navbar
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm"
        style={{ position: "fixed", top: "0", width: "100%", zIndex: "1000" }}
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            דבש תבלינים
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {props.isAdmin ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">
                      !!אהלן משפחת צמח
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
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
            <div className="buttons d-flex flex-row align-items-center">
              {props.currentUser ? (
                <>
                  <p
                    className="fw-bold me-3 text-dark text-center mt-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    שלום {props.currentUser.userName}
                  </p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      props.setCurrentUser(null);
                      props.setIsAdmin(false);
                    }}
                  >
                    התנתק
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/register" className="btn btn-outline-dark">
                    <i className="fa fa-user-plus m-1"></i>
                    הרשמה
                  </NavLink>
                  <NavLink to="/login" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in m-1"></i>
                    התחבר
                  </NavLink>
                </>
              )}

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

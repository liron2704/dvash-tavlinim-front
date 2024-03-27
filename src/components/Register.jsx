import React from "react";
import "../style/register.css";

export default function Register() {
  return (
    <div className="hero">
      <form className="mx-auto ">
        <h4 className="text-center ">הירשם</h4>
        <div className="mb-3 ">
        <div className="d-flex flex-column align-items-end">
            <p className="form-text fw-bold">שם משתמש</p>
          </div>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div className="mb-3 mt-3">
          <div className="d-flex flex-column align-items-end">
            <p className="form-text fw-bold">אימייל</p>
          </div>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          </div>
        </div>
        <div className="mb-3">
          <div className="d-flex flex-column align-items-end">
            <p className="form-text fw-bold">סיסמה</p>
          </div>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <div className="d-flex flex-column align-items-end">
            <p className="form-text fw-bold">אימות סיסמה</p>
          </div>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-flex flex-column align-items-end">
          <p className="form-text text-primary text-decoration-none ">
            ?שכחת סיסמה
          </p>
          <button type="submit" className="btn btn-primary ">
            התחבר
          </button>
        </div>
      </form>
    </div>
  );
}

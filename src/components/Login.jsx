import React from "react";
import "../style/login.css";

export default function Login() {
  return (
    <div className="hero">
      <form className="mx-auto mt-3">
        <h4 className="text-center ">התחבר</h4>
        <div className="mb-3 ">
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

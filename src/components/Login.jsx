import React, { useState } from "react";
import "../style/login.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firestore";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorMsg, setErorMsg] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLoginEvent = async (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    try {
      // Dispatch the loginUser action and wait for it to complete
      const actionResult = await dispatch(loginUser(userCredentials));
      if (actionResult.payload === "email error") {
        setErorMsg(".לא נמצא אימייל במערכת");
      } else if (actionResult.payload === "user error") {
        setErorMsg(".לא נמצא משתמש");
      } else if (actionResult.payload === "missing password") {
        setErorMsg(". הכנס סיסמה בבקשה ");
      } else {
        const currentUser = props.getCurrentUser(auth.currentUser.uid);
        props.setCurrentUser(currentUser);
        setErorMsg("");
        if (currentUser.uId === "cQJwRfRGOrbht9I6JCaMc7BfZKm1") {
          props.setIsAdmin(true);
        }
        navigate("/");
      }
    } catch (error) {
      // Handle any errors that occurred during login
      console.error("Error logging in:", error);
      // Display error message to the user or perform any other action
    }
  };

  return (
    <div className="login-hero">
      <form className="mx-auto mt-3" onSubmit={handleLoginEvent}>
        <h4 className="text-center ">התחבר</h4>
        <div className="mb-3 ">
          <div className="d-flex flex-column align-items-end">
            <p style={{ color: "red" }} className="fw-bold">
              {erorMsg}
            </p>
            <p className="form-text fw-bold">אימייל</p>
          </div>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="d-flex flex-column align-items-end">
            <p className="form-text fw-bold">סיסמה</p>
          </div>
          <input
            type="password"
            className="form-control"
            onChange={(event) => setPassword(event.target.value)}
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

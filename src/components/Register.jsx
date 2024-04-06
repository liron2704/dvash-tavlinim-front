import React, { useState } from "react";
import "../style/register.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firestore";

export default function Register(props) {
  const [erorMsg, setErorMsg] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleRegisterEvent = async (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
      userName,
    };
    try {
      if (confirmPass !== password) {
        setErorMsg("הסיסמה שהקשת אינה זהה לאימות הסיסמה");
        return;
      } else if (userName.length < 2) {
        setErorMsg("שם חייב להיות לפחות שתי אותיות");
        return;
      }
      // Dispatch the registerUser action and wait for it to complete
      const actionResult = await dispatch(registerUser(userCredentials));
      if (actionResult.payload === "email error") {
        setErorMsg("האימייל כבר רשום. בבקשה בחר אימייל אחר.");
      } else if (actionResult.payload === "email missing") {
        setErorMsg("הכנס אימייל בבקשה");
      } else if (actionResult.payload === "password missing") {
        setErorMsg("הכנס סיסמה מעל 6 ספרות");
      } else if (actionResult.payload === "weak password") {
        setErorMsg("הסיסמה חייבת להיות מעל 6 ספרות");
      } else {
        const currentUser = {
          uId: auth.currentUser.uid,
          userName: userName,
          email: email,
          phoneNumber: "",
          address: {
            city: "",
            street: "",
            houseNumber: "",
          },
        };
        props.addUserToDb(currentUser);
        props.setCurrentUser(currentUser);
        setErorMsg("");
        navigate("/");
      }
    } catch (error) {
      ///////////////
    }
  };

  return (
    <div className="register-hero">
      <form className="mx-auto" onSubmit={handleRegisterEvent}>
        <h4 className="text-center">הירשם</h4>
        <div className="mb-3 ">
          <div className="d-flex flex-column align-items-end">
            <p className="fw-bold text-end" style={{ color: "red" }}>
              {erorMsg}
            </p>
            <p className="form-text fw-bold">שם מלא</p>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setUserName(event.target.value)}
          />
          <div className="mb-3 mt-3">
            <div className="d-flex flex-column align-items-end">
              <p className="form-text fw-bold">אימייל</p>
            </div>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(event) => setEmail(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="d-flex flex-column align-items-end">
            <p className="form-text fw-bold">אימות סיסמה</p>
          </div>
          <input
            type="password"
            className="form-control"
            onChange={(event) => setConfirmPass(event.target.value)}
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

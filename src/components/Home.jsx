import React from "react";
import bgImage from "../assets/bg.jpg";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={bgImage} className="card-img mt-4" alt="Background" height={"300px"} />
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <div className="container text-center" style={{ marginTop: "150px" }}>
            <h5 className="card-title display-3 fw-bolder mb-0 ">דבש תבלינים</h5>
            <p className="card-text lead fs-2">
               משלוחים לכל הארץ עד שלושה ימי עסקים
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

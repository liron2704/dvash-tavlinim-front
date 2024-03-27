import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

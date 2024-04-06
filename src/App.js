import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import { db, getDocuments, usersCollection } from "./config/firestore";
import { addDoc, collection } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocuments(usersCollection);
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ uId: doc.uId, ...doc.data() });
      });
      setUsers(usersData);
    } catch (error) {
      // Handle error if needed
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUserToDb = async (userData) => {
    try {
      // Add a new document with a generated ID to the "users" collection
      await addDoc(collection(db, "users"), {
        uId: userData.uId,
        userName: userData.userName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
      });
      fetchUsers();
    } catch (error) {
      console.error("Error adding user: ", error);
      throw error; // Handle the error as needed
    }
  };

  const getCurrentUser = (uId) => {
    return users.find((user) => user.uId === uId);
  };

  return (
    <>
      <NavBar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/login"
          element={
            <Login
              setCurrentUser={setCurrentUser}
              getCurrentUser={getCurrentUser}
              currentUser={currentUser}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              setCurrentUser={setCurrentUser}
              addUserToDb={addUserToDb}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

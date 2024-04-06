import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../config/firestore";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userCredentials) => {
    try {
      // Destructure email and password from userCredentials
      const { email, password } = userCredentials;
      // Call Firebase's signInWithEmailAndPassword method to authenticate user
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return "email error";
      }
      if (error.code === "auth/missing-email") {
        return "email missing";
      }
      if (error.code === "auth/missing-password") {
        return "password missing";
      }
      if (error.code === "auth/weak-password") {
        return "weak password";
      }
      // If an error occurs during authentication, handle it
      return "error"; // Dispatch error message to store
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    try {
      // Destructure email and password from userCredentials
      const { email, password, userName } = userCredentials;
      // Call Firebase's signInWithEmailAndPassword method to authenticate user
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        return "email error";
      } else if (error.code === "auth/invalid-credential") {
        return "user error";
      } else if (error.code === "auth/missing-password") {
        return "missing password";
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    eror: null,
  },
});

export default userSlice.reducer;

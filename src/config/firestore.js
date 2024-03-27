// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPGLZG1RygD7qSWqrytGt6IOSNyXJE6Tw",
  authDomain: "dvashtavlinim.firebaseapp.com",
  projectId: "dvashtavlinim",
  storageBucket: "dvashtavlinim.appspot.com",
  messagingSenderId: "592852568207",
  appId: "1:592852568207:web:cb08530236e5370a9048fa",
  measurementId: "G-305J2QDZ1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const storage = getStorage(app);

export const productsCollection =  collection(db, "products");

export const getDocuments = async (collec) => {
  try {
    const querySnapshot = await getDocs(collec);
    return querySnapshot;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error; // Re-throw the error to handle it in the calling component
  }
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "finalproject-7915a.firebaseapp.com",
    projectId: "finalproject-7915a",
    storageBucket: "finalproject-7915a.appspot.com",
    messagingSenderId: "896033058209",
    appId: "1:896033058209:web:4dee0929e81027ac47efe0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
export const provider = new GoogleAuthProvider();
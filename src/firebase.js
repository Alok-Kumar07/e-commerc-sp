// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCO2ZHIHiuOJy4OkXFxb17VBDCH0R6Cl1g",
  authDomain: "e-commerce-auth-7.firebaseapp.com",
  projectId: "e-commerce-auth-7",
  storageBucket: "e-commerce-auth-7.appspot.com",
  messagingSenderId: "224175285508",
  appId: "1:224175285508:web:05ec3e108fd6c10a749c51",
  measurementId: "G-3YP97E9DGJ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};
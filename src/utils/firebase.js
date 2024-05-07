// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVEsoleIQl8pUZ8tH0jmf9owtNCcBMm-I",
  authDomain: "netflixgpt-9f1bd.firebaseapp.com",
  projectId: "netflixgpt-9f1bd",
  storageBucket: "netflixgpt-9f1bd.appspot.com",
  messagingSenderId: "291927818749",
  appId: "1:291927818749:web:e8b00b83626a6e9db69994",
  measurementId: "G-Q4EB6F9P9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth()
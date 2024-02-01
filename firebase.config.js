// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5n34vtHbw-dhpisCaHp5iW3BsrlIQF_Q",
  authDomain: "arafath-portfolio-26e30.firebaseapp.com",
  projectId: "arafath-portfolio-26e30",
  storageBucket: "arafath-portfolio-26e30.appspot.com",
  messagingSenderId: "1064084261441",
  appId: "1:1064084261441:web:092836e4bbc00e514694c0",
  measurementId: "G-1C44S8H5Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
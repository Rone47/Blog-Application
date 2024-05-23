// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-94ffb.firebaseapp.com",
  projectId: "blog-mern-94ffb",
  storageBucket: "blog-mern-94ffb.appspot.com",
  messagingSenderId: "529010403317",
  appId: "1:529010403317:web:e711b75751e91cd1a262bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOckKsBcXFm6gKjKGVenkKYxJAz1h4EIA",
  authDomain: "reactjs-83605.firebaseapp.com",
  projectId: "reactjs-83605",
  storageBucket: "reactjs-83605.appspot.com",
  messagingSenderId: "438695581501",
  appId: "1:438695581501:web:610c5cff92564f976a5754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
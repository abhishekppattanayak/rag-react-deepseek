// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCZFtRO2OVBbTDk5RLpzfC4WXhlTVzKu4",
  authDomain: "rag-react-deepseek.firebaseapp.com",
  projectId: "rag-react-deepseek",
  storageBucket: "rag-react-deepseek.firebasestorage.app",
  messagingSenderId: "253293895395",
  appId: "1:253293895395:web:3befc6ea8907b8ccaaafd6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
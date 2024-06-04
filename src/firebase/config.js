// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9YWL5uTxv8tN17ECqrA-9vW20ZXI6Gpk",
  authDomain: "coderproyecto1.firebaseapp.com",
  projectId: "coderproyecto1",
  storageBucket: "coderproyecto1.appspot.com",
  messagingSenderId: "980175814091",
  appId: "1:980175814091:web:26054465adab672cfe8a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app); 
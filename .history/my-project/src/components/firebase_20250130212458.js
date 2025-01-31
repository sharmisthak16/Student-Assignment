// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import auth functions from firebase/auth
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore functions

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBbJ0LWJOG7xecQUhc7-0NGPvu33pYSSAg",
  authDomain: "assignment-f6a48.firebaseapp.com",
  projectId: "assignment-f6a48",
  storageBucket: "assignment-f6a48.firebasestorage.app",
  messagingSenderId: "801572322432",
  appId: "1:801572322432:web:b56f932b3f50b6140f7a65",
  measurementId: "G-SBG6GTP1V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get auth instance
const db = getFirestore(app); // Initialize Firestore

// Export auth, signInWithEmailAndPassword, and Firestore methods
export { auth, signInWithEmailAndPassword, db, addDoc, collection };

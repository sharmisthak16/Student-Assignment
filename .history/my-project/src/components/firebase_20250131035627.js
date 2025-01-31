import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Firestore imports

const firebaseConfig = {
  apiKey: "AIzaSyBbJ0LWJOG7xecQUhc7-0NGPvu33pYSSAg",
  authDomain: "assignment-f6a48.firebaseapp.com",
  projectId: "assignment-f6a48",
  storageBucket: "assignment-f6a48.appspot.com",
  messagingSenderId: "801572322432",
  appId: "1:801572322432:web:b56f932b3f50b6140f7a65",
  measurementId: "G-SBG6GTP1V2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, addDoc, collection };

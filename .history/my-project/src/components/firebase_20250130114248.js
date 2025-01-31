// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
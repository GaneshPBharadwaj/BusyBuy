// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3KcWOnZGo-ZyAQXn4s5liplEjVXFZPc0",
    authDomain: "buybusy-5919d.firebaseapp.com",
    projectId: "buybusy-5919d",
    storageBucket: "buybusy-5919d.appspot.com",
    messagingSenderId: "468253470537",
    appId: "1:468253470537:web:98bbabca601446e52d3498"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export default db;
export { app, auth };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqYNl6d3uz4iJXPeVUyxNN0nxkxTXwJdI",
  authDomain: "classsync-35l.firebaseapp.com",
  projectId: "classsync-35l",
  storageBucket: "classsync-35l.appspot.com",
  messagingSenderId: "336533755616",
  appId: "1:336533755616:web:d6a2a55adb5e38f6626285",
  measurementId: "G-4ZZYSBL1RB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);

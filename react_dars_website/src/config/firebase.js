// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  /*Example of the firebase config parameters, feel free to delete if you don't need:

  apiKey: "Adz3SyD3YNl6d3dz4iJXPeVavxNN0axkxTdwJ0I",
  authDomain: "classsync-35l.firebaseapp.com",
  projectId: "classsync-35l",
  storageBucket: "classsync-35l.appspot.com",
  messagingSenderId: "336504828426",
  appId: "1:316233123416:web:d777a55a959390f6626285",
  measurementId: "G-4ZZYSBL1RB",

  */
  //Paste your copied keys and values pairs for the firebase config parameters below this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
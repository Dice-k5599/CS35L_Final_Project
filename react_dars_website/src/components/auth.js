import { useState } from "react";
import { auth, googleAuth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    console.log("Block google is running");
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (err) {
      console.log(err);
    }
    console.log("Block google stops running");
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(auth?.currentUser?.email);

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={logOut}> Sign out</button>
    </div>
  );
};

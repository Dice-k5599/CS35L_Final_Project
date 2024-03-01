import { useState } from "react";
import { auth, googleAuth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ResetPassword } from "./ResetPassword";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const Auth = ({ loginType, email, password, onGetClassList }) => {
  console.log("Auth is running");
  const navigate = useNavigate();

  /*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  */

  const handleSetClassList = () => {
    onGetClassList();
  };

  const signUp = async () => {
    console.log(email);
    try {
      const studentCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = studentCred.user;
      await setDoc(doc(db, "students", user.uid), {
        email: user.email,
        //fullName: fullName,
      });
      handleSetClassList();
      console.log("User created and document added to Firestore");
      alert("You are logged in");
    } catch (err) {
      console.log(err);
      alert("Sign-up error: " + err);
    }
  };

  const signIn = async () => {
    console.log("Sign in block is running");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleSetClassList();
      console.log("You are logged in");
      navigate("/temp");
      return true;
    } catch (err) {
      console.log(err);
      console.log("Sign-in error: " + err);
    }
  };

  const resetPassword = async (email) => {
    console.log("Block google is running");
    alert("Password is successfully reset");
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err);
      alert("Reset error: " + err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
      //alert("You are logged in");
    } catch (err) {
      console.log(err);
      alert("Google sign-in error: " + err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      alert("You are logged out");
      handleSetClassList();
    } catch (err) {
      console.log(err);
      alert("Sign-out error: " + err);
    }
  };
  if (loginType == "emailSignIn") {
    signIn();
  }
  /*
  return (
    <div>
      <input
        placeholder="Type your ucla username..."
        type="email"
        onChange={(e) => setEmail(e.target.value + "@g.ucla.edu")}
      ></input>
      <input
        placeholder="insert password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        placeholder="insert full name..."
        type="text"
        onChange={(e) => setFullName(e.target.value)}
      ></input>
      <button onClick={signUp}> Sign up</button>
      <button onClick={signIn}> Sign in</button>
      <ResetPassword onReset={resetPassword} />
      <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={logOut}> Sign out</button>
      </div>
    </div>
  );*/
};

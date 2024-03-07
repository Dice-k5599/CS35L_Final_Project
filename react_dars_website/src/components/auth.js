import { useState } from "react";
import { auth, googleAuth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ResetPassword } from "./ResetPassword";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const Auth = ({ loginType, email, password, onGetClassList }) => {
  console.log("Auth is running");
  const navigate = useNavigate();

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

      //sign the user out so they can't login yet.
      await signOut(auth);
      alert("You are signed out");

      //Send the verification email right after signing up
      const user = studentCred.user;
      try {
      await sendEmailVerification(user);
      alert("email verification sent. Please confirm the email before signing in!");
    } catch (err) {
      alert("Something went wrong while sending the email verification link, please refresh the page and try again");
    };

      await setDoc(doc(db, "students", user.uid), {
        email: user.email,
        verified: false
        //fullName: fullName,
      });
      handleSetClassList();
      console.log("User created and document added to Firestore");
    } catch (err) {
      console.log(err);
      alert("Sign-up error: " + err);
    }
  };

  const signIn = async () => {
    try {
      const studentCred = await signInWithEmailAndPassword(auth, email, password);
      const user = studentCred.user;
      if (user && !user.emailVerified) {
        await signOut(auth);
        alert("Please verify your email before signing in! We have sent a new email verification link.");
        await sendEmailVerification(user);
      }
      else { 
        const userDocRef = doc(db, "students", user.uid);
        console.log("updating user verified flag");
        await updateDoc(userDocRef, {
          verified: true
        })
      handleSetClassList();
      console.log("You are logged in");
      navigate("/temp");
      }
    } catch (err) {
      console.log(err);
      alert("Invalid username or password, try again or reset password");
    }
  };

  const resetPassword = async () => {
    console.log("Block reset is running");
    //alert("Password is successfully reset");
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err);
      //alert("Reset error: " + err);
    }
  };

  const signInWithGoogle = async () => {
    console.log("Google sign in is running");
    try {
      await signInWithPopup(auth, googleAuth);
      console.log(email, password);
      navigate("/temp");
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
  if (loginType === "emailSignIn") {
    signIn();
  } else if (loginType === "googleSignIn") {
    signInWithGoogle();
  } else if (loginType === "signUp") {
    signUp();
  } else if (loginType === "reset") {
    resetPassword();
  }
};

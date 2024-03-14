import { auth, googleAuth } from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { setDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { addDefaultClass } from "./AddDefaultClass";

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

      //Send the verification email right after signing up
      const user = studentCred.user;
       try {
       await sendEmailVerification(user);
       alert("email verification sent. Please confirm the email before signing in on the left form below!");

       await setDoc(doc(db, "students", user.uid), {
        email: user.email,
        verified: false,
        defaultClassMade: false
      });
     } catch (err) {
       console.log(err);
       alert("Something went wrong while sending the email verification link, please refresh the page and try again");
     };

     /*
      handleSetClassList();
      console.log("User created and document added to Firestore");
      */
    } catch (err) {
      console.log(err);
      alert("Invalid email and/or password, please try again!");
    }
  };

  const signIn = async () => {
    try {
      const studentCred = await signInWithEmailAndPassword(auth, email, password);
      const user = studentCred.user;
      if (user && !user.emailVerified) {
        await signOut(auth);
        alert("Please verify your email before signing in!");
        //await sendEmailVerification(user); Two awaits close to each other seems to cause issues, don't uncomment this
      }
      else if(user && user.emailVerified){
        const userDocRef = doc(db, "students", user.uid); 
        console.log("updating user verified flag");
        await updateDoc(userDocRef, {
          verified: true
        })

        const studentDoc = await getDoc(userDocRef);
        if (studentDoc.data().defaultClassMade === false) {
          await addDefaultClass(`students/${user.uid}/classes`);
          await updateDoc(userDocRef, {
            defaultClassMade: true
          })
        }

        handleSetClassList();
        console.log("You are logged in");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      alert("Invalid username or password, try again or reset password");
    }
  };

  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("A link to reset password has been sent to your email, please click on the link to finish the reset process.");
    } catch (err) {
      console.log(err);
      alert("Something is wrong with the reset, please try again.");
    }
  };

  const signInWithGoogle = async () => {
    console.log("Google sign in is running");
    try {
      const studentCred = await signInWithPopup(auth, googleAuth);
      const user = studentCred.user;
      const userDocRef = doc(db, "students", user.uid); 
      const studentDoc = await getDoc(userDocRef);

      if (studentDoc.exists() == false){
        await setDoc(doc(db, "students", user.uid), {
        email: user.email,
        verified: true,
        defaultClassMade: false
      })
        alert("You are successfully signed up with Google. Please click on 'Continue with Google' to sign in");
      }

      else {
      console.log("updating user verified flag");
      await updateDoc(userDocRef, {
        verified: true
      })

      if (studentDoc.data().defaultClassMade === false) {
        await addDefaultClass(`students/${user.uid}/classes`);
        await updateDoc(userDocRef, {
          defaultClassMade: true
        })
      }
      handleSetClassList();
      console.log("You are logged in");
      navigate("/dashboard");
      } 
      
    } catch (err) {
      console.log(err);
      alert("Something went wrong with Google sign-in. Please try again ");
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      // alert("You are logged out");
      console.log("Logged out");
      //handleSetClassList();
    } catch (err) {
      console.log(err);
      alert("Error: you may not be logged out, consider exitting the webpage");
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
  } else if (loginType === "logout") {
    logOut();
  }
};
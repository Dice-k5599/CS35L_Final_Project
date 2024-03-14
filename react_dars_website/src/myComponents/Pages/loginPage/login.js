import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./login.css";
// import the codes for using the icons from react-icons
// RiBearSmileLine -> bear icon
import { RiBearSmileLine } from "react-icons/ri";
// FaLock -> lock icon
//
import { FaLock } from "react-icons/fa";

// Import the useNavigate to go through pages
import { useNavigate } from "react-router-dom";

import { Auth } from "./auth";

const LoginForm = ({ onGetClassList }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [loginType, setLoginType] = useState("");
  const [fullName, setFullName] = useState("");

  //This controls the visibility of Auth
  const [showAuth, setShowAuth] = useState(false);
  const [showRegAuth, setShowRegAuth] = useState(false);
  useEffect(() => {
    if (showAuth) {
      setShowAuth(false);
      console.log("Auth is now false");
    }
  }, [showAuth]);

  useEffect(() => {
    if (showRegAuth) {
      setShowRegAuth(false);
      console.log("Auth is now false");
    }
  }, [showRegAuth]);

  //Need to have this for the form tag so it doesn't reload itself on Google sign in
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="visualBG">
      <h1 className="text-pop-up-top">ClassSync</h1>
      <div className="forms-container">
        <div className="wrapper">
          <form onSubmit={handleSubmit} action="">
            {/* Heading 1 */}
            <h2>SIGN IN</h2>
            {/* username box */}
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter your UCLA email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Put the bear icon on */}
              <RiBearSmileLine className="icon" />
            </div>
            {/* password box */}
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Put the lock icon on */}
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              {/* checkbox */}
              {/*<label><input type = "checkbox" /> Remember me</label>*/}
              {/* link to forgot pw page */}
              {/* NEED CHANGE, so far the forgot link take to google homepage */}
              <button className="pulsing-button" 
                onClick={() => {
                  setLoginType("reset");
                  setShowAuth(true);
                }}
              >
                Forgot password?
              </button>
            </div>

            {/* Login button takes to next page (Temp) */}
            <div className="allButton">
              <button className="pulsing-button"
                onClick={() => {
                  setLoginType("emailSignIn");
                  setShowAuth(true);
                  console.log("onClick is running");
                }}
              >
                Login
              </button>

              {/* Google Login button takes to next page (Temp) */}
              <button className="pulsing-button"
                onClick={() => {
                  setLoginType("googleSignIn");
                  setShowAuth(true);
                }}
              >
                Continue with Google
              </button>
            </div>
            {showAuth && (
              <Auth
                loginType={loginType}
                email={email}
                password={password}
                onGetClassList={onGetClassList}
              />
            )}
          </form>
        </div>
        {/*REGISTER FORM STARTS HERE*/}
        <div className="wrapper">
          <form onSubmit={handleSubmit} action="">
            {/* Heading 1 */}
            <h2>REGISTER</h2>

            {/* username box */}
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter your UCLA email"
                required
                onChange={(e) => setRegEmail(e.target.value)}
              />
              {/* Put the bear icon on */}
              <RiBearSmileLine className="icon" />
            </div>
            {/* password box */}
            <div className="input-box">
              <input 
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setRegPassword(e.target.value)}
              />
              {/* Put the lock icon on */}
              <FaLock className="icon" />
            </div>

            {/* Login button takes to next page (Temp) */}
            <div style={{marginTop: '75px'}} className="allButton">
              {/* Google Login button takes to next page (Temp) */}
              <button className="pulsing-button"
                  onClick={() => {
                    setLoginType("signUp");
                    setShowRegAuth(true);
                  }}
                >
                  Register
                </button>
              <button className="pulsing-button"
                onClick={() => {
                  setLoginType("googleSignIn");
                  setShowRegAuth(true);
                }}
              >
                Sign up with Google
              </button>
            </div>
            {/*This block runs the Auth component with loginType indicating
              what kind of function in Auth that we want to use*/}
              {showRegAuth && (
              <Auth
                loginType={loginType}
                email={regEmail}
                password={regPassword}
                onGetClassList={onGetClassList}
              />
            )}
            
          </form>
        </div>
      </div>        
    </div>
  );
};

export default LoginForm;
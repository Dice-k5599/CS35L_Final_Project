import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./login.css";
// import the codes for using the icons from react-icons
// RiBearSmileLine -> bear icon
import { RiBearSmileLine } from "react-icons/ri";
// FaLock -> lock icon
import { FaLock } from "react-icons/fa";

// Import the useNavigate to go through pages
import { useNavigate } from "react-router-dom";

import { Auth } from "../../Components/auth";

const LoginForm = ({ onGetClassList }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("");
  const [fullName, setFullName] = useState("");

  const [showAuth, setShowAuth] = useState(false);
  useEffect(() => {
    if (showAuth) {
      setShowAuth(false);
      console.log("Auth is now false");
    }
  }, [showAuth]);

  return (
    <div className="visualBG">
      <div className="wrapper">
        <form action="">
          {/* Heading 1 */}
          <h1>ClassSync</h1>

          {/* username box */}
          <div className="input-box">
            <input
              type="email"
              placeholder="UCLA USERNAME"
              required
              onChange={(e) => setEmail(e.target.value + "@g.ucla.edu")}
            />
            {/* Put the bear icon on */}
            <RiBearSmileLine className="icon" />
          </div>
          {/* password box */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Passwords"
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
            <a href="https://www.google.com.tw/?hl=zh-TW"> Forgot password?</a>
          </div>

          {/* Login button takes to next page (Temp) */}
          <div className="allButton">
            <button
              onClick={() => {
                setLoginType("emailSignIn");
                console.log("onClick is running");
                setShowAuth(true);
              }}
            >
              Login
            </button>
            {showAuth && (
              <Auth
                loginType={loginType}
                email={email}
                password={password}
                onGetClassList={onGetClassList}
              />
            )}

            {/* Google Login button takes to next page (Temp) */}
            <button
              onClick={() => {
                navigate("/temp");
              }}
            >
              Continue with Google
            </button>
          </div>

          <div className="register-link">
            {/* link to create account */}
            {/* NEED CHANGE, so far the Register link take to YouTube homepage */}
            <p>
              Don't have an account?{" "}
              <a href="https://www.youtube.com/"> Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

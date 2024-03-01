import React from 'react';
import './loginForm.css';
// import the codes for using the icons from react-icons
// RiBearSmileLine -> bear icon
import { RiBearSmileLine } from "react-icons/ri";
// FaLock -> lock icon
import { FaLock } from "react-icons/fa";


const LoginForm = () => {
    return(
        <div className = "wrapper">
            <form action = "">
                {/* Heading 1 */}
                <h1>ClassSync Login</h1>

                {/* username box */}
                <div className = "input-box">
                    <input type = "text" placeholder = "UID" required />
                    {/* Put the bear icon on */}
                    <RiBearSmileLine className = "icon" />
                </div>
                {/* password box */}
                <div className = "input-box">
                    <input type = "password" placeholder = "Passwords" required />
                    {/* Put the lock icon on */}
                    <FaLock className = "icon" />
                </div>
                
                <div className = "remember-forgot">
                    {/* checkbox */}
                    <label><input type = "checkbox" /> Remember me</label>
                    {/* link to forgot pw page */}
                    {/* NEED CHANGE, so far the forgot link take to google homepage */}
                    <a href = "https://www.google.com.tw/?hl=zh-TW"> Forgot passward?</a>
                </div>

                <button type = "submit">Login</button>

                <div className = "register-link">
                    {/* link to create account */}
                    {/* NEED CHANGE, so far the Register link take to YouTube homepage */}
                    <p>Don't have an account? <a href = "https://www.youtube.com/"> Register</a></p>
                </div>
            </form>
        </div>


    )

}

export default LoginForm
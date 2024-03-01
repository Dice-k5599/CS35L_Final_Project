import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();

    return (
        <div>
            <h1>About.....OUT AND ABOUT</h1>
            <button 
                onClick={() => {
                    navigate("/");
                }}> 
                Go to the Login page 
            </button>
        </div>
    );
}

export default About;
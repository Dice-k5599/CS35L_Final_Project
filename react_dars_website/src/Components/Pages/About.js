import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();

    return (
        <div className="visualBG">
            <h1>About.....OUT AND ABOUT</h1>
            <button 
                onClick={() => {
                    navigate("/Chart");
                }}> 
                Go to the Chart page 
            </button>
        </div>
    );
}

export default About;
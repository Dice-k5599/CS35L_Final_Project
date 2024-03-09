import React from "react";
import { useNavigate } from "react-router-dom";

function Temp(){
    const navigate = useNavigate();

    return (
        <div className="visualBG">
            <h1>Temp Page</h1>
            <button 
                onClick={() => {
                    navigate("/about");
                }}> 
                Go to the About page, here you go. 
            </button>
            <button 
                onClick={()=>{
                    navigate("/ClassSelection");
                }}>
                    Go to Class Select
                </button>
        </div>
    );
}

export default Temp;
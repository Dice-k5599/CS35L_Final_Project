import React from "react";
import "./DashBoard.css"
import { useNavigate } from "react-router-dom";

// components import
import Navigationbar from "./Navbar";
import Example from "./Navbar2";
import Classfield from "./Classfield";

function DashBoard(){
    const navigate = useNavigate();

    return (
        <div className="">        
            <Navigationbar />
            {/* <Example /> */}
            <Classfield />

        </div>
    );
}

export default DashBoard;
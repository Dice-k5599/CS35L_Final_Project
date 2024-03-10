import React from "react";
import "./DashBoard.css"
import { useNavigate } from "react-router-dom";

// components import
import Navigationbar from "./Navbar";
import Classfield from "./Classfield";

function DashBoard(){
    const navigate = useNavigate();

    return (
        <div className="">        
            <Navigationbar />
            <Classfield />

        </div>
    );
}

export default DashBoard;
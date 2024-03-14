import React from "react";
import "./DashBoard.css"
import { useNavigate } from "react-router-dom";

// components import
import Navigationbar from "./Navbar";
import Classfield from "./Classfield";
import FooterPart from "./FooterPart";
import FileUploadField from "./FileUploadButton";

function DashBoard(){
    const navigate = useNavigate();

    return (
        <div className="">        
            <Navigationbar />
            <Classfield />
            <FileUploadField />
            <FooterPart />
        </div>
    );
}

export default DashBoard;
import React from "react";
import "./SelectionPage.css"
import { useNavigate } from "react-router-dom";

// components import
import Navigationbar from "../dashboard/Navbar";
import Selectionfield from "./Selectionfield";
import FooterPart from "../dashboard/FooterPart";

function SelectionPage(){
    const navigate = useNavigate();

    return (
        <div className="">        
            <Navigationbar />
            <Selectionfield />
            <FooterPart />
        </div>
    );
}

export default SelectionPage;
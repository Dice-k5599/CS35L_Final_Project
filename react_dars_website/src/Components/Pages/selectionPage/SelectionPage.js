import React from "react";
import "./SelectionPage.css"
import { useNavigate } from "react-router-dom";

// components import
import Navigationbar from "../dashboard/Navbar";
import Selectionfield from "./Selectionfield";

function SelectionPage(){
    const navigate = useNavigate();

    return (
        <div className="">        
            <Navigationbar />
            <Selectionfield />

        </div>
    );
}

export default SelectionPage;
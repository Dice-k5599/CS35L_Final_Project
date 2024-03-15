import React from "react";

// components import
import Navigationbar from "../dashboard/Navbar";
import Selectionfield from "./Selectionfield";
import FooterPart from "../dashboard/FooterPart";

function SelectionPage(){

    return (
        <div className="">        
            <Navigationbar />
            <Selectionfield />
            <FooterPart />
        </div>
    );
}

export default SelectionPage;
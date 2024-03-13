import React from "react";
import { useNavigate } from "react-router-dom";

// components import
import Navigationbar from "../dashboard/Navbar";
import FooterPart from "../dashboard/FooterPart";

function UploadPage(){

    return (
        <body className="">        
            <Navigationbar />
            <div className=""></div>
            <FooterPart className=""/>
        </body>
    );
}

export default UploadPage;
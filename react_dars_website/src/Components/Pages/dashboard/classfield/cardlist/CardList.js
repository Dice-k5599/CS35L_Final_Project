import React from "react";
import "./CardList.css"
import { useNavigate } from "react-router-dom";

// components import
import Navigationbar from "./navbar/Navbar";
import Card from "./card/Card";

function CardList(){
    const navigate = useNavigate();

    return (
        <div>        
            <Navigationbar />
            <div className="mt5 ml5 pl5">
                <h1 className="mt5">For You</h1>
                <h3>Availible Courses</h3>
                <Card />
                <h3>Future Courses</h3>
                <Card />
                <h3>Other Courses</h3>
                <Card />
            </div>
        </div>
    );
}

export default CardList;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Classfield.css";
// component import
import CardList from "./CardList";

function Classfield(){
    const navigate = useNavigate();

    return (
        <div className="ml-10 mb-10">  
            <div>
                <p className="f1 b mt5"> 
                    For me   
                </p>
                <p className="f5">
                    Check out courses available specifically for you next quarter, all required courses in the future, and courses you have taken in the past.  
                </p>    
            </div>  
            <p className="f2 b mt3">
                Available Courses
            </p>
            <CardList />
            <p className="f2 b mt3">
                Future Courses
            </p>
            <CardList />
            <p className="f2 b mt3">
                Past Courses
            </p>
            <CardList />
        </div>
    );
}

export default Classfield;
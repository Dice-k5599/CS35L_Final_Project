import React from "react";
import { useNavigate } from "react-router-dom";
import "./Selectionfield.css";
// component import
import SelectionCardList from "./SelectionCardList";

function Selectionfield(){
    const navigate = useNavigate();

    return (
        <div className="ml-10 mb-10">  
            <div>
                <p className="f1 b mt5"> 
                    Select Courses   
                </p>
                <p className="f5">
                    Select courses you have taken in the past. Based on your current progression, we will suggest courses you could take in the next quarter and in the future. 
                </p>    
            </div>  

            {/* SelectionCardList compnenet will return a list of selectionCards aka checkboxes */}
            <p className="f2 b mt3">
                Lower Division CS Courses
            </p>
            <SelectionCardList />

            {/* <p className="f2 b mt3">
                General Education Courses
            </p>
            <SelectionCardList />
            <p className="f2 b mt3">
                Upper Division CS Courses (100-180)
            </p>
            <SelectionCardList />
            <p className="f2 b mt3">
                Technical Breadth Courses
            </p>
            <SelectionCardList />
            <p className="f2 b mt3">
                Sci Tech Courses
            </p>
            <SelectionCardList /> */}
        </div>
    );
}

export default Selectionfield;
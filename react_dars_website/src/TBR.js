import React from "react";
import './App.css'

const TBR =({tbr1,tbr2,tbr3}) =>{
    if(tbr1=== false &&tbr2===false && tbr3===false){
        return(
            <p>
            <div>
            We notice that you haven't taken a Tech Breadth yet. 
            </div>
            <div>
                Try Technology Management with the courses ECON 1, ECON 2, and ENGR 111.
            </div>
        </p>);
    }
    else{
        return null;
    }
}

export default TBR;
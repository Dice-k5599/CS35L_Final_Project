import React from "react";
import { useNavigate } from "react-router-dom";
import CardSelect from "../CardSelect";

function ClassSelection(){
    const navigate = useNavigate();
    return(
        <div>
            <CardSelect/>
            <button onClick={() => {
                    navigate("/temp");
                }}>
                Go back to Temp
            </button>
         </div>
    );
}

export default ClassSelection;
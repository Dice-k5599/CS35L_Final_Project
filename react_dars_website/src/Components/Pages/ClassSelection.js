import React from "react";
import { useNavigate } from "react-router-dom";
import CheckboxList from "../CheckboxList";

function ClassSelection(){
    const navigate = useNavigate();
    return(
        <div>
            <CheckboxList/>
            <button onClick={() => {
                    navigate("/temp");
                }}>
                Go back to Temp
            </button>
         </div>
    );
}

export default ClassSelection;
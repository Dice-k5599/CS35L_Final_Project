import React from "react"
import { useNavigate } from "react-router-dom"
import ClassList from "../ClassList"

function ClassDisplay(){
    const navigate = useNavigate();
    return(
        <div>
            <ClassList/>
            <button onClick={() => {
                    navigate("/temp");
                }}>
                Go back to Temp
            </button>
        </div>
    )
}

export default ClassDisplay
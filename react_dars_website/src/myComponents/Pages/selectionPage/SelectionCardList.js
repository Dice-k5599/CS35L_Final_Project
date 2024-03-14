import React, { useState, useEffect } from "react";

// components import
import SelectionCard from "./SelectionCard";

const SelectionCardList = ({ classes, completed, handleCheckboxChange }) => {

    return (
        <div className="flex flex-row flex-wrap">   
            {
                classes.map((classItem, i) => (
                    <div key={i}>
                        <SelectionCard
                            checked={completed[i]}
                            onChange={()=>{handleCheckboxChange(i, classItem.classType)}}
                            label={classItem.classCode}
                        />
                    </div>
                ))
            }     
        </div>
    );
}

export default SelectionCardList;
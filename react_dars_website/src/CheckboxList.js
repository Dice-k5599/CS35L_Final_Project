import React from 'react';
import { useState } from 'react';

const CheckboxList = ({ ClassData }) => {
    const [completed, setCompleted]=useState(ClassData);
    console.log(ClassData[0].completed);
    return (
        <div>
            {
                ClassData.map((user, i) => {
                    return (
                        <div style={{marginLeft: "20px"}}>
                            <input
                            type='checkbox'
                            key={i} 
                            name={ClassData[i].classCode}
                            defaultChecked={ClassData[i].completed}
                            onChange={()=>{setCompleted(ClassData[i].completed=!ClassData[i].completed)}}
                            />
                            {ClassData[i].classCode}
                        </div>
                    );
                 })
            }
        </div>
    );
}

export default CheckboxList;
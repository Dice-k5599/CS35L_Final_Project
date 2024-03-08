import React from "react";

const ClassList = ({ClassData}) => {

    return (
        <div>
            <div>
                List of Completed Classes: 
                {
                    ClassData.map((user,i) => {
                        if(ClassData[i].completed){
                            return(
                                    <p name={ClassData[i].classCode} style={{marginLeft: "20px"}}>
                                    {ClassData[i].classCode}
                                    </p>
                            ) 
                        }
                    })
                }
            </div>
            <div>
                List of Remaining Classes: 
                {
                    ClassData.map((user,i) => {
                        if(!ClassData[i].completed){
                            return(
                                    <p name={ClassData[i].classCode} style={{marginLeft: "20px"}}>
                                    {ClassData[i].classCode}
                                    </p>
                            )
                        }
                    })
                }
            </div>`
        </div>
    );
};

export default ClassList;
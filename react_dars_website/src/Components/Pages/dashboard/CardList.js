import React from "react";

// components import
import Card from "./Card";

const CardList = ({ classes }) => {
    console.log(classes);
    return (
        <div className="flex flex-row flex-wrap">   
            {
                classes.map((classItem, i) => (
                    <div key={i}>
                        <Card
                            label={classItem.classCode}
                        />
                    </div>
                ))
            }     
        </div>
    );
}

export default CardList;
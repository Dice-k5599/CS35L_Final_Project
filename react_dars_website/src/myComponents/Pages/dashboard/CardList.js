import React from "react";

// components import
import Card from "./Card";

const CardList = ({ classes }) => {
    return (
        <div className="flex flex-row flex-wrap">   
            {
                classes.map((classItem, i) => (
                    <div key={i}>
                        <Card
                            label={classItem.classCode}
                            title={classItem.className}
                            description={classItem.description}
                            units={classItem.units}
                        />
                    </div>
                ))
            }     
        </div>
    );
}

export default CardList;
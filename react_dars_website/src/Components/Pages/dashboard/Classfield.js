import React, { useState, useEffect } from "react";
import getClassData from "../selectionPage/getClassData";
import "./Classfield.css";

// component import
import CardList from "./CardList";

const Classfield = () => {
    const [classData, setClassData] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [completedClasses, setCompletedClasses] = useState([]);
    const [unCompletedClasses, setUnCompletedClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClassData();
                setClassData(data);
                setCompleted(data.map(item => item.completed)); // Initialize completed state
                
                // these two functions will filter out the data array so that
                // completedCourses will hold all courses user have completed
                // and unCompletedCourses will hold all courses user haven't completed
                const complete = data.filter((item) => {
                    return item.completed === true;
                })
                const unComplete = data.filter((item) => {
                    return item.completed === false;
                })

                setCompletedClasses(complete);
                setUnCompletedClasses(unComplete);

                console.log(completedClasses);
                console.log(unCompletedClasses);
            } catch (error) {
                console.error('Error fetching classes data:', error);
            }
        };

        fetchData(); // Call fetchData when the component mounts
    }, []);

    return (
        <div className="ml-10 mb-10">  
            <div>
                <p className="f1 b mt5"> 
                    For me   
                </p>
                <p className="f5">
                    Check out courses available specifically for you next quarter, all required courses in the future, and courses you have taken in the past.  
                </p>    
            </div>  
            <p className="f2 b mt3">
                Available Courses
            </p>
            <CardList classes={[]}/>
            <p className="f2 b mt3">
                Future Courses
            </p>
            <CardList classes={unCompletedClasses} />
            <p className="f2 b mt3">
                Past Courses
            </p>
            <CardList classes={completedClasses} />
        </div>
    );
}

export default Classfield;
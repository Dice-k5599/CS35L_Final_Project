import React, { useState, useEffect } from "react";
import getClassData from "../selectionPage/getClassData";
import "./Classfield.css";
import NextClass from "../selectionPage/NextClass";

// component import
import CardList from "./CardList";

const Classfield = () => {
    const [classData, setClassData] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [recommendedClasses, setRecommendedClasses] = useState([]);
    const [completedClasses, setCompletedClasses] = useState([]);
    const [unCompletedClasses, setUnCompletedClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClassData();
                setClassData(data);
                setCompleted(data.map(item => item.completed)); // Initialize completed state
                
                const recommendedData = await NextClass();
                setRecommendedClasses(recommendedData); // Initialize recommended class array

                // these two functions will filter out the data array so that
                // completedCourses will hold all courses user have completed
                // and unCompletedCourses will hold all courses user haven't completed
                setCompletedClasses(data.filter((item) => {
                    return item.completed === true;
                }))
                setUnCompletedClasses(data.filter((item) => {
                    return item.completed === false;
                }))
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
            <CardList classes={recommendedClasses}/>
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
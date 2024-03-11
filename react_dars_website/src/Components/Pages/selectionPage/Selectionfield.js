import React, { useState, useEffect } from "react";
import "./Selectionfield.css";
import getClassData from "./getClassData";

// packages import
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../config/firebase'; // Assuming db is exported from firebase config

// component import
import SelectionCardList from "./SelectionCardList";

const Selectionfield = () => {
    const [classData, setClassData] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [lowerDivClasses, setLowerDivClasses] = useState([]);
    const [lowerDivCompleted, setLowerDivCompleted] = useState([]);
    const [upperDivClasses, setUpperDivClasses] = useState([]);
    const [upperDivCompleted, setUpperDivCompleted] = useState([]);
    const [techBreadthClasses, setTechBreadthClasses] = useState([]);
    const [techBreadthCompleted, setTechBreadthCompleted] = useState([]);
    const [sciTechClasses, setSciTechClasses] = useState([]);
    const [sciTechCompleted, setSciTechCompleted] = useState([]);
    const [electiveClasses, setElectiveClasses] = useState([]);
    const [electiveCompleted, setElectiveCompleted] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClassData();
                setClassData(data);
                setCompleted(data.map(item => item.completed)); // Initialize completed state

                // filtering each array for class type categorization
                const lowerDivData = (data.filter(item => item.classType === 'LowerDiv')); // array of lower div classes
                const upperDivData = (data.filter(item => item.classType === 'UpperDiv')); // array of upper div classes
                const techBreadthData = (data.filter(item => item.classType === 'TechBreadth'));   // array of techbreadth classes
                const sciTechData = (data.filter(item => item.classType === 'SciTech'));   // array scitech classes
                const electiveData = (data.filter(item => item.classType === 'Elective')); // array of electives

                setLowerDivClasses(lowerDivData);
                setUpperDivClasses(upperDivData);
                setTechBreadthClasses(techBreadthData);
                setSciTechClasses(sciTechData);
                setElectiveClasses(electiveData);

                setLowerDivCompleted(lowerDivData.map(item => item.completed));
                setUpperDivCompleted(upperDivData.map(item => item.completed));
                setTechBreadthCompleted(techBreadthData.map(item => item.completed));
                setSciTechCompleted(sciTechData.map(item => item.completed));
                setElectiveCompleted(electiveData.map(item => item.completed));
                // setLowerDivCompleted(data.filter(item => item.classType === 'LowerDiv').map(item => item.completed));
                // setLowerDivCompleted(data.filter(item => item.classType === 'LowerDiv').map(item => item.completed));
                // setLowerDivCompleted(data.filter(item => item.classType === 'LowerDiv').map(item => item.completed));
                // setLowerDivCompleted(data.filter(item => item.classType === 'LowerDiv').map(item => item.completed));
                // setLowerDivCompleted(data.filter(item => item.classType === 'LowerDiv').map(item => item.completed));

                
            } catch (error) {
                console.error('Error fetching classes data:', error);
            }
        };
        
        fetchData(); // Call fetchData when the component mounts
    }, []);
    

    const handleCheckboxChange = async (index) => {
        const updatedCompleted = [...completed]; // Create a copy of completed state array
        updatedCompleted[index] = !completed[index]; // Toggle the completed state at the given index
        setCompleted(updatedCompleted); // Update the completed state

        // Update Firestore document
        try {
            const classDocRef = doc(db, "students", auth.currentUser?.uid, "classes", classData[index].id);
            await updateDoc(classDocRef, {
                completed: updatedCompleted[index]
            });
            console.log("Document successfully updated!");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    return (
        <div className="ml-10 mb-10">  
            <div>
                <p className="f1 b mt5"> 
                    Select Courses   
                </p>
                <p className="f5">
                    Select courses you have taken in the past. Based on your current progression, we will suggest courses you could take in the next quarter and in the future. 
                </p>    
            </div>  

            {/* SelectionCardList compnenet will return a list of selectionCards aka checkboxes */}

            <p className="f2 b mt3">
                Lower Division Courses
            </p>
            <SelectionCardList classes={lowerDivClasses} completed={lowerDivCompleted} handleCheckboxChange={handleCheckboxChange}/>

            <p className="f2 b mt3">
                Upper Division CS Courses
            </p>
            <SelectionCardList classes={upperDivClasses} completed={upperDivCompleted} handleCheckboxChange={handleCheckboxChange}/>
            
            <p className="f2 b mt3">
                Technical Breadth Courses
            </p>
            <SelectionCardList classes={techBreadthClasses} completed={techBreadthCompleted} handleCheckboxChange={handleCheckboxChange}/>

            <p className="f2 b mt3">
                Science & Technology Courses
            </p>
            <SelectionCardList classes={sciTechClasses} completed={sciTechCompleted} handleCheckboxChange={handleCheckboxChange}/>

            <p className="f2 b mt3">
                Upper Division CS Elective Courses
            </p>
            <SelectionCardList classes={electiveClasses} completed={electiveCompleted} handleCheckboxChange={handleCheckboxChange}/>
        </div>
    );
}

export default Selectionfield;
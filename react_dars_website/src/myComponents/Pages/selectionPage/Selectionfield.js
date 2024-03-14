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
            console.log('useeffect entered');
            try {
                const data = await getClassData();
                data.sort((a,b)=> a.index - b.index);
                setClassData(data);
                setCompleted(data.map(item => item.completed)); // Initialize completed state

                // filtering each array for class type categorization
                const lowerDivData = (data.filter(item => item.classType === 'LowerDiv').sort((a,b)=> a.index - b.index)); // array of lower div classes
                const upperDivData = (data.filter(item => item.classType === 'UpperDiv').sort((a,b)=> a.index - b.index)); // array of upper div classes
                const techBreadthData = (data.filter(item => item.classType === 'TechBreadth').sort((a,b)=> a.index - b.index));   // array of techbreadth classes
                const sciTechData = (data.filter(item => item.classType === 'SciTech').sort((a,b)=> a.index - b.index));   // array scitech classes
                const electiveData = (data.filter(item => item.classType === 'Elective').sort((a,b)=> a.index - b.index)); // array of electives


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

                
            } catch (error) {
                console.error('Error fetching classes data:', error);
            }
        };
        
        fetchData(); // Call fetchData when the component mounts
    }, []);
    

    // since we have five lists, a simple index access to classData array will not update firebase database correctly. 
    // This is because when for example, index 1 is passed as argument to this handleCheckboxChange function, the 
    // corresponding class is ambiguous because there are 5 classes that could have index 1 (again because 5 lists). 
    // We have to pass on another parameter classType so that we know exactly which class to modify

    const handleCheckboxChange = async (index, classType) => {
        const updatedCompleted2 = [...completed]; // Create a copy of completed state array
        updatedCompleted2[index] = !completed[index]; // Toggle the completed state at the given index
        setCompleted(updatedCompleted2); // Update the completed state

        let targetList;
        let targetCompletedValue;
        let updatedCompleted;
    
        switch (classType) {
            case "LowerDiv":
                targetList = lowerDivClasses;
                updatedCompleted = [...lowerDivCompleted];
                updatedCompleted[index] = !lowerDivCompleted[index];
                setLowerDivCompleted(updatedCompleted);
                targetCompletedValue = !lowerDivCompleted[index];
                break;
            case "UpperDiv":
                targetList = upperDivClasses;
                updatedCompleted = [...upperDivCompleted];
                updatedCompleted[index] = !upperDivCompleted[index];
                setUpperDivCompleted(updatedCompleted);
                targetCompletedValue = !upperDivCompleted[index];
                break;
            case "TechBreadth":
                targetList = techBreadthClasses;
                updatedCompleted = [...techBreadthCompleted];
                updatedCompleted[index] = !techBreadthCompleted[index];
                setTechBreadthCompleted(updatedCompleted);
                targetCompletedValue = !techBreadthCompleted[index];
                break;
            case "SciTech":
                targetList = sciTechClasses;
                updatedCompleted = [...sciTechCompleted];
                updatedCompleted[index] = !sciTechCompleted[index];
                setSciTechCompleted(updatedCompleted);
                targetCompletedValue = !sciTechCompleted[index];
                break;
            case "Elective":
                targetList = electiveClasses;
                updatedCompleted = [...electiveCompleted];
                updatedCompleted[index] = !electiveCompleted[index];
                setElectiveCompleted(updatedCompleted);
                targetCompletedValue = !electiveCompleted[index];
                break;
            default:
                break;
        }

        // Update Firestore document
        try {
            const classDocRef = doc(db, "students", auth.currentUser?.uid, "classes", targetList[index].id);
            await updateDoc(classDocRef, {
                completed: targetCompletedValue
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

            <p className="f2 b mt3 sticky top-14 bg-white z-10">
                Lower Division Courses
            </p>
            <SelectionCardList classes={lowerDivClasses} completed={lowerDivCompleted} handleCheckboxChange={handleCheckboxChange}/>

            <p className="f2 b mt3 sticky top-14 bg-white z-10">
                Upper Division CS Courses
            </p>
            <SelectionCardList classes={upperDivClasses} completed={upperDivCompleted} handleCheckboxChange={handleCheckboxChange}/>
            
            <p className="f2 b mt3 sticky top-14 bg-white z-10">
                Technical Breadth Courses
            </p>
            <SelectionCardList classes={techBreadthClasses} completed={techBreadthCompleted} handleCheckboxChange={handleCheckboxChange}/>

            <p className="f2 b mt3 sticky top-14 bg-white z-10">
                Science & Technology Courses
            </p>
            <SelectionCardList classes={sciTechClasses} completed={sciTechCompleted} handleCheckboxChange={handleCheckboxChange}/>

            <p className="f2 b mt3 sticky top-14 bg-white z-10">
                Upper Division CS Elective Courses
            </p>
            <SelectionCardList classes={electiveClasses} completed={electiveCompleted} handleCheckboxChange={handleCheckboxChange}/>
        </div>
    );
}

export default Selectionfield;
import React, { useState, useEffect } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import getClassData from './getClassData';
import { db, auth } from '../config/firebase';
import SelectionCard from './Pages/selectionPage/SelectionCard';

const CardSelect = () => {
    const [classData, setClassData] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClassData();
                setClassData(data);
                setCompleted(data.map(item => item.completed)); // Initialize completed state
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
        <div>
            <h1>Please select Completed Courses:</h1>
            {
                classData.map((classItem, i) => (
                    <div key={i} style={{ marginLeft: "20px" }}>
                        <SelectionCard
                            checked={completed[i]}
                            onChange={()=>{handleCheckboxChange(i)}}
                            label={classItem.classCode}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default CardSelect;
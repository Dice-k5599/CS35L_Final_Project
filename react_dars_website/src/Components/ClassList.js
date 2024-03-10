import React, { useState, useEffect } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import getClassData from './getClassData';
import { db, auth } from '../config/firebase';

const ClassList = () => {
    const [classData, setClassData] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClassData();
                setClassData(data);
                setCompleted(data.map(item => item.completed)); // Initialize completed state
            } catch (error) {
                console.error('Error fetching classes data:', error);
                setError('Error fetching classes data. Please try again later.');
            }
        };

        fetchData(); // Call fetchData when the component mounts
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div>
                List of Completed Courses
                {classData.map((classItem, i) => {
                    if (completed[i]) {
                        return (
                            <p key={classItem.classCode} style={{ marginLeft: "20px" }}>
                                {classItem.classCode}
                            </p>
                        )
                    }
                    return null;
                })}
            </div>
            <div>
                List of Remaining classes
                {classData.map((classItem, i) => {
                    if (!completed[i]) {
                        return (
                            <p key={classItem.classCode} style={{ marginLeft: "20px" }}>
                                {classItem.classCode}
                            </p>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default ClassList;

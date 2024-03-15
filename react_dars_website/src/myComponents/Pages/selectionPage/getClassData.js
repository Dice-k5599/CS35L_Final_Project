import { db, auth } from "../../../config/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const getClassesData = async () => {
  try {
    const userId = auth.currentUser?.uid; // Get the UID of the current user
    if (auth.currentUser) {
      // console.log("User is authenticated");
    }
    
    const classesCollection = collection(db, "students", userId, "classes");
    // console.log(classesCollection);

    // Fetch documents from the "classes" subcollection
    const querySnapshot = await getDocs(classesCollection);
    const classesData = []; // Local variable to store the retrieved data

    querySnapshot.forEach((classDoc) => {
      // Extract data from each document
      const classData = classDoc.data();
      // Optionally include document ID in the data
      classData.id = classDoc.id;
      // Push the data into the array
      classesData.push(classData);
    });

    // Now classesData contains an array of class data retrieved from Firestore
    // console.log(classesData);
    return classesData; // Return the data for further processing if needed
  } catch (error) {
    console.log("Error getting documents: ", error);
    throw error; // Rethrow the error for handling by the caller
  }
};

// Export the function without calling it
export default getClassesData;
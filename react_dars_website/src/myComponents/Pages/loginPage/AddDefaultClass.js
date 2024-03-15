import { db } from '../../../config/firebase.js'
import { writeBatch, collection, addDoc, doc } from 'firebase/firestore';
import { ClassData } from './ClassData.js'; // Import the list from ClassData.js


async function addDefaultClass(collectionName) {
  try {
    const batch = writeBatch(db);
    const colRef = collection(db, collectionName);
    
    for (const item of ClassData) {
      const newDocRef = doc(colRef);
      batch.set(newDocRef, item);
    }

    //Indiviual adding to collection caused documents to be dropped -> using batch commit to fix this
    await batch.commit();
    // console.log('Default list added to Firestore successfully');

  } catch (error) {
    console.error('Error adding default list to Firestore:', error);
  }
}

export { addDefaultClass };
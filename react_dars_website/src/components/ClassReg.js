import { db, auth } from "../config/firebase";
import { useState } from "react";
import { collection, addDoc, doc } from "firebase/firestore";

export const ClassReg = ({ onGetClassList }) => {
  const [newClassName, setNewClassName] = useState("");
  const [newClassCode, setNewClassCode] = useState("");
  const [newClassAvailability, setNewClassAvailability] = useState(false);

  const submitClass = async () => {
    try {
      const studentDocRef = doc(db, "students", auth?.currentUser?.uid); // Reference to the user's document
      const classesSubcollectionRef = collection(studentDocRef, "classes");
      await addDoc(classesSubcollectionRef, {
        className: newClassName,
        classCode: newClassCode,
        availability: newClassAvailability,
        userId: auth?.currentUser?.uid,
      });
      onGetClassList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="Class Name..."
          onChange={(e) => setNewClassName(e.target.value)}
        ></input>
        <input
          placeholder="Class Code..."
          onChange={(e) => setNewClassCode(e.target.value)}
        ></input>
        <input
          type="checkbox"
          checked={newClassAvailability}
          onChange={(e) => setNewClassAvailability(e.target.checked)}
        ></input>
        <label> Available this academic year</label>
        <div>
          <button onClick={submitClass}>Register this class</button>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { db, auth } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";

export const UpdateDoc = ({ classId, updateType, onGetClassList }) => {
  const [updatedClassName, setUpdatedClassName] = useState("");
  const [updatedClassCode, setUpdatedClassCode] = useState("");
  const [updatedClassAvailability, setUpdatedClassAvailability] =
    useState(false);

  const updateClass = async (id, data, type) => {
    console.log("update started");
    try {
      const classDoc = doc(
        db,
        "students",
        auth?.currentUser?.uid,
        "classes",
        id
      );
      if (type === "className") {
        await updateDoc(classDoc, { className: data });
      } else if (type === "classCode") {
        await updateDoc(classDoc, { classCode: data });
      } else if (type === "availability") {
        console.log("2321312323");
        await updateDoc(classDoc, { availability: data });
      }
      //await updateDoc(classDoc, { className: name });
      onGetClassList();
    } catch (err) {
      console.log(err);
    }
    console.log("update finished");
  };

  const handleUpdate = (type) => {
    //console.log(classId, updatedClassName);
    console.log(type);
    if (type === "className") {
      updateClass(classId, updatedClassName, type);
    } else if (type === "classCode") {
      updateClass(classId, updatedClassCode, type);
    } else if (type === "availability") {
      console.log(updatedClassAvailability);
      updateClass(classId, updatedClassAvailability, type);
      //console.log(updateClassAvailability);
    }
    //onUpdate(classId, updatedClassName);
  };

  return (
    <div>
      <input
        placeholder="New class name..."
        onChange={(e) => {
          if (updateType === "className") {
            setUpdatedClassName(e.target.value);
          } else if (updateType === "classCode") {
            setUpdatedClassCode(e.target.value);
          }
        }}
      ></input>
      <button onClick={() => handleUpdate(updateType)}>update</button>
    </div>
  );
};

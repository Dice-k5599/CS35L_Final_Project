import { UpdateDoc } from "../components/UpdateDoc";
import { db, auth } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export const DisplayClasses = ({ classList, onGetClassList }) => {
  const deleteClass = async (id) => {
    try {
      const classDoc = doc(
        db,
        "students",
        auth?.currentUser?.uid,
        "classes",
        id
      );
      await deleteDoc(classDoc);
      onGetClassList();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {classList.map((csClass) => (
        <div>
          <h1 style={{ color: csClass.availability ? "green" : "red" }}>
            Class name: {csClass.className}
          </h1>
          <p>Class code: {csClass.classCode}</p>
          <button onClick={() => deleteClass(csClass.id)}>Delete class</button>
          <div>
            <UpdateDoc
              classId={csClass.id}
              updateType={"className"}
              onGetClassList={onGetClassList}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayClasses;

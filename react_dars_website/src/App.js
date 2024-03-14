import React, { Component, useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// firebase related imports
import { db, auth } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Components import
import LoginForm from "./myComponents/Pages/loginPage/login.js";
import DashBoard from "./myComponents/Pages/dashboard/DashBoard.js";
import SelectionPage from "./myComponents/Pages/selectionPage/SelectionPage.js";


function App() {
  const [classList, setClassList] = useState([]);
  const getCLassList = async () => {
    try {
      let filteredData = [];
      if (!auth.currentUser) {
        //filtered data is empty since no user is logged in
      } else {
        const studentDocRef = doc(db, "students", auth?.currentUser?.uid);
        const classesSubcollectionRef = collection(studentDocRef, "classes");
        const data = await getDocs(classesSubcollectionRef);
        filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      }

      setClassList(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCLassList();
  }, []);

  return (
    <div className="App">
      {/*
      <Auth onGetClassList={getCLassList} />
      <ClassReg onGetClassList={getCLassList} />

      <DisplayClasses classList={classList} onGetClassList={getCLassList} />*/}

<Router>
        <Routes>
          <Route
            path="/"
            element={<LoginForm onGetClassList={getCLassList} />}
          />

          <Route path="/selectionPage" element={<SelectionPage />}/>
          <Route path="/dashboard" element={<DashBoard />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

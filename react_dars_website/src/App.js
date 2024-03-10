import React, { Component, useEffect, useState } from "react";
import "./App.css";

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
import About from "./Components/Pages/About.js";
import LoginForm from "./Components/Pages/login.js";
import Temp from "./Components/Pages/Temp.js";
import DashBoard from "./Components/Pages/dashboard/DashBoard.js";
import SelectionPage from "./Components/Pages/selectionPage/SelectionPage.js";
import MyDialog from "./Components/Pages/dashboard/MyDialog.js"

import { Auth } from "./Components/auth.js";
import { ClassReg } from "./Components/ClassReg.js";
import { DisplayClasses } from "./Components/DisplayClasses.js";


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
          <Route path="/about" element={<About />} />
          <Route path="/temp" element={<Temp />} />
          <Route path="/SelectionPage" element={<SelectionPage />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

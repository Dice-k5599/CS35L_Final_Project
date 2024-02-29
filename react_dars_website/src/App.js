import React, { Component, useEffect, useState } from "react";
//import CardList from "./CardList";
//import SearchBox from "./SearchBox";
//import { robots } from "./robots";
import "./App.css";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./Components/Pages/About.js";
import LoginForm from "./Components/Pages/login.js";
import Temp from "./Components/Pages/Temp.js";

import { Auth } from "./Components/auth.js";
import { ClassReg } from "./Components/ClassReg.js";
import { DisplayClasses } from "./Components/DisplayClasses.js";
import { db, auth } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

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
      <Auth onGetClassList={getCLassList} />
      <ClassReg onGetClassList={getCLassList} />

      <DisplayClasses classList={classList} onGetClassList={getCLassList} />

      <Router>
        <Routes>
          <Route path = "/" element={<LoginForm/>} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/temp" element={<Temp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

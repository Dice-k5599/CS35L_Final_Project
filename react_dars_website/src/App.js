import React, { Component, useEffect, useState } from "react";
//import CardList from "./CardList";
//import SearchBox from "./SearchBox";
//import { robots } from "./robots";
import "./App.css";
import { Auth } from "./Components/auth";
import { ClassReg } from "./Components/ClassReg";
import { DisplayClasses } from "./Components/DisplayClasses";
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
    <div className="">
      <Auth onGetClassList={getCLassList} />
      <ClassReg onGetClassList={getCLassList} />

      <DisplayClasses classList={classList} onGetClassList={getCLassList} />
    </div>
  );
}

//Daisuke's code for Basketball portion below
/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      // state is something that could change
      robots: robots,
      searchfield: "",
    };
  }

  componentDidMount() {}

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //need to do this instead of this.state.searchfield = value
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>
          <strong>Lakers Players Index</strong>
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
*/
export default App;

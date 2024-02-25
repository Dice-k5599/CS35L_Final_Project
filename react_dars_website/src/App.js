import React, { Component, useEffect, useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [classList, setClassList] = useState([]);
  const classCollectionRef = collection(db, "cs_classes");

  const [newClassName, setNewClassName] = useState("");
  const [newClassCode, setNewClassCode] = useState("");
  const [newClassAvailability, setNewClassAvailability] = useState(false);

  //Update specific parts of the class document
  const [updateClassName, setUpdatedClassName] = useState("");
  const [updateClassCode, setUpdatedClassCode] = useState("");
  const [updateClassAvailability, setUpdatedClassAvailability] =
    useState(false);

  const getCLassList = async () => {
    try {
      const data = await getDocs(classCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setClassList(filteredData);
      console.log({ filteredData });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCLassList();
  }, []);

  const submitClass = async () => {
    try {
      await addDoc(classCollectionRef, {
        className: newClassName,
        classCode: newClassCode,
        availability: newClassAvailability,
      });
      getCLassList();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteClass = async (id) => {
    try {
      const classDoc = doc(db, "cs_classes", id);
      await deleteDoc(classDoc);
      getCLassList();
    } catch (err) {
      console.log(err);
    }
  };

  const updateClass = async (id) => {
    try {
      const classDoc = doc(db, "cs_classes", id);
      await deleteDoc(classDoc);
      getCLassList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Auth />

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

      <div>
        {classList.map((csClass) => (
          <div>
            <h1 style={{ color: csClass.availability ? "green" : "red" }}>
              Class name: {csClass.className}
            </h1>
            <p>Class code: {csClass.classCode}</p>
            <button onClick={() => deleteClass(csClass.id)}>
              Delete class
            </button>
            <button></button>
          </div>
        ))}
      </div>
    </div>
  );
}

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

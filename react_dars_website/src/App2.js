import React, {Component} from "react";
import './App.css'
import CheckboxList from "./CheckboxList";
import ClassList from "./ClassList";
import { ClassData } from "./ClassData";


class App2 extends Component{
    render(){
        return(
            <div>
            <CheckboxList ClassData={ClassData}/>
            </div>
        )
    };
}

export default App2;

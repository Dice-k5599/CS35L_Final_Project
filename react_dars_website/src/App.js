import React, { Component } from 'react';
import './App.css'

function GE({complete}){
    if(complete==="GE False"){
        return (
            <div>
                <div> <b>Please select completed GE requirements:</b> </div>
                <div style={{marginLeft: "20px"}}>
                <input type="checkbox" id="geReq1" name="geReq1" value="geReq1"/>
                GE Requirement1
                </div>
            </div>
        );
    }
    return null;
}

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedOption: "GE True"
        };
    }
    handleOptionChange= changeEvent =>{
        this.setState({selectedOption: changeEvent.target.value})
    }

    render() {
        return (    
            <form>
                <div>
                    <b>Have you Completed your General Education?</b>
                </div>
                <div className='GE Completed' style={{marginLeft: "20px"}}>
                    <label>
                        <input type="radio" value="GE True" checked={this.state.selectedOption==="GE True"} 
                        onChange={this.handleOptionChange} />
                        GE Completed
                    </label>
                </div>
                <div className='GE Not' style={{marginLeft: "20px"}}>
                    <label>
                        <input type="radio" value="GE False" checked={this.state.selectedOption==="GE False"}
                        onChange={this.handleOptionChange} />
                        GE Not Completed
                    </label>  
                </div>
                <div>
                    <GE
                    complete={this.state.selectedOption}
                    />
                </div>
                <div>
                    <b>Major Requirements</b>
                </div>
                <div style={{marginLeft: "20px"}}>
                    <label>
                    <input type="checkbox" id="mReq1" name="mReq1" value="mReq1"/>
                    Major Requirement1
                    </label>
                </div>
            </form>
        );
    }
}

export default App;
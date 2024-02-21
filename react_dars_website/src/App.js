import React, { Component } from 'react';
import './App.css'

function GE({complete}){
    if(complete==="GE False"){
        return (
            <div>
                <div> <b>Please select completed GE requirements:</b> </div>
                <div style={{marginLeft: "20px"}}>
                    <div>
                    <input type="checkbox" id="geReq1" name="geReq1" value="geReq1"/>
                    Writing I
                    </div>
                    <div>
                    <input type="checkbox" id="geReq2" name="geReq2" value="geReq2"/>
                    FAH GE (Lit/Cult or Phil/Ling or Visual/Arts)
                    </div>
                    <div>
                    <input type="checkbox" id="geReq3" name="geReq3" value="geReq3"/>
                    FAH GE (Lit/Cult or Phil/Ling or Visual/Arts)(Different from above)
                    </div>
                    <div>
                    <input type="checkbox" id="geReq4" name="geReq4" value="geReq4"/>
                    FSC GE (Historical)
                    </div>
                    <div>
                    <input type="checkbox" id="geReq5" name="geReq5" value="geReq5"/>
                    FSC GE (Social)
                    </div>
                    <div>
                    <input type="checkbox" id="geReq6" name="geReq6" value="geReq6"/>
                    FSC GE (Life Sci)
                    </div>
                    <div>
                    <input type="checkbox" id="geReq7" name="geReq7" value="geReq7"/>
                    Engineering Ethics and Writing(1 from ENGR 181EW to 185EW)
                    </div>
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
                    <h1>Welcome to Class Sync</h1>
                </div>
                <div style={{fontSize: "1.25vw"}}>
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
                <div style={{fontSize: "1.25vw"}}>
                    <b>Select Completed Major Requirements:</b>
                </div>
                <div style={{marginLeft: "20px"}}>
                    <div><b>Lower Division Courses:</b></div>
                    <div style={{marginLeft: "20px"}}>
                        <div>
                            <input type="checkbox" id="ldReq1" name="ldReq1" value="ldReq1"/>
                            CS 1
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq2" name="ldReq2" value="ldReq2"/>
                            CS 31
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq3" name="ldReq3" value="ldReq3"/>
                            CS 33
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq4" name="ldReq4" value="ldReq4"/>
                            CS 35L
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq5" name="ldReq5" value="ldReq5"/>
                            CS M51A or ECE M16
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq6" name="ldReq6" value="ldReq6"/>
                            Math 31A
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq7" name="ldReq7" value="ldReq7"/>
                            Math 31B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq8" name="ldReq8" value="ldReq8"/>
                            Math 32A
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq9" name="ldReq9" value="ldReq9"/>
                            Math 32B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq10" name="ldReq10" value="ldReq10"/>
                            Math 33A
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq11" name="ldReq11" value="ldReq11"/>
                            Math 33B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq12" name="ldReq12" value="ldReq12"/>
                            Math 61
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq13" name="ldReq13" value="ldReq13"/>
                            Physics 1A
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq14" name="ldReq14" value="ldReq14"/>
                            Physics 1B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq15" name="ldReq15" value="ldReq15"/>
                            Physics 1C
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq16" name="ldReq16" value="ldReq16"/>
                            Physics 4AL or 4BL
                        </div>
                    </div>
                    <div>
                        <b>Upper Division Courses:</b>
                    </div>
                    <div style={{marginLeft: "20px"}}>
                        <div>
                            <input type="checkbox" id="udReq1" name="udReq1" value="udReq1"/>
                            CS 111
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq2" name="ldReq2" value="ldReq2"/>
                            CS 118
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq3" name="ldReq3" value="ldReq3"/>
                            CS 131
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq4" name="ldReq4" value="ldReq4"/>
                            CS M151B or ECE M116C
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq5" name="ldReq5" value="ldReq5"/>
                            CS M5151A or ECE M116L                           
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq6" name="ldReq6" value="ldReq6"/>
                            CS 180
                        </div>
                      <div>
                        <input type="checkbox" id="ldReq7" name="ldReq7" value="ldReq7"/>
                        CS 181
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq8" name="ldReq8" value="ldReq8"/>
                            CS 130 or 152B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq9" name="ldReq9" value="ldReq9"/>
                            Statisitics (Stats 100A, Math 170A, Math 170E ECE 131A, CEE 110)
                        </div>
                    </div>
                    <div>
                        <b>CS Upper Division Electives:</b>
                    </div>
                    <div style={{marginLeft: "20px"}}>
                        <div>
                            <input type="checkbox" id="CSElec1" name="CSElec1" value="CSElec1"/>
                            CS Upper Div Elective #1 (CS 100-188) 
                        </div> 
                        <div>
                            <input type="checkbox" id="CSElec2" name="CSElec2" value="CSElec2"/>
                            CS Upper Div Elective #2 (CS 100-188) 
                        </div> 
                        <div>
                            <input type="checkbox" id="CSElec3" name="CSElec3" value="CSElec3"/>
                            CS Upper Div Elective #3 (CS 100-187) 
                        </div> 
                        <div>
                            <input type="checkbox" id="CSElec4" name="CSElec4" value="CSElec4"/>
                            CS Upper Div Elective #4 (CS 100-187) 
                        </div> 
                        <div>
                            <input type="checkbox" id="CSElec5" name="CSElec5" value="CSElec5"/>
                            CS Upper Div Elective #5 (CS 100-187) 
                        </div> 
                    </div>
                    <div>
                        <b>Tech Breadth:</b>
                    </div>
                    <div style={{marginLeft: "20px"}}>
                        <div>
                            <input type="checkbox" id="TBR1" name="TBR1" value="TBR1"/>
                            TBR #1
                        </div> 
                        <div>
                            <input type="checkbox" id="TBR2" name="TBR2" value="TBR2"/>
                            TBR #2
                        </div>
                        <div>
                            <input type="checkbox" id="TBR3" name="TBR3" value="TBR3"/>
                            TBR #3
                        </div>
                    </div>
                    <div>
                        <b>Sci-Tech:</b>
                    </div>
                    <div style={{marginLeft: "20px"}}>
                        <div>
                            <input type="checkbox" id="ST1" name="ST1" value="ST1"/>
                                Sci-Tech #1
                        </div>
                        <div>
                            <input type="checkbox" id="ST2" name="ST2" value="ST2"/>
                            Sci-Tech #2
                        </div>
                        <div>
                            <input type="checkbox" id="ST3" name="ST3" value="ST3"/>
                            Sci-Tech #3
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default App;
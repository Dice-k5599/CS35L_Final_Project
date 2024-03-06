import React, { Component } from 'react';
import './App.css'
import CSGE from './CSGE';
import TBR from './TBR';
import saveClasses from './saveClasses';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            GE1: false,
            GE2: false,
            GE3: false,
            GE4: false,
            GE5: false,
            GE6: false,
            GE7: false,
            LD1: true,
            LD2: false,
            LD3: false,
            LD4: false,
            LD5: false,
            LD6: false,
            LD7: false,
            LD8: false,
            LD9: false,
            LD10: false,
            LD11: false,
            LD12: false,
            LD13: false,
            LD14: false,
            LD15: false,
            LD16: false,
            LD17: false,
            UD1: false,
            UD2: false,
            UD3: false,
            UD4: false,
            UD5: false,
            UD6: false,
            UD7: false,
            UD8: false,
            UD9: false,
            TBR1: false,
            TBR2:false,
            TBR3: false,
            ST1: false,
            ST2: false,
            ST3: false
        };
    }
    handGE1 = changeEvent =>{
        this.setState({GE1: changeEvent.target.checked})
    }
    handGE2 = changeEvent =>{
        this.setState({GE2: changeEvent.target.checked})
    }
    handGE3 = changeEvent =>{
        this.setState({GE3: changeEvent.target.checked})
    }
    handGE4 = changeEvent =>{
        this.setState({GE4: changeEvent.target.checked})
    }
    handGE5 = changeEvent =>{
        this.setState({GE5: changeEvent.target.checked})
    }
    handGE6 = changeEvent =>{
        this.setState({GE6: changeEvent.target.checked})
    }
    handGE7 = changeEvent =>{
        this.setState({GE7: changeEvent.target.checked})
    }
    handleLD1= changeEvent =>{
        this.setState({LD1: changeEvent.target.checked})
    }
    handleLD2= changeEvent =>{
        this.setState({LD2: changeEvent.target.checked})
    }
    handleLD3= changeEvent =>{
        this.setState({LD3: changeEvent.target.checked})
    }
    handleLD4= changeEvent =>{
        this.setState({LD4: changeEvent.target.checked})
    }
    handleLD5= changeEvent =>{
        this.setState({LD5: changeEvent.target.checked})
    }
    handleLD6= changeEvent =>{
        this.setState({LD6: changeEvent.target.checked})
    }
    handleLD7= changeEvent =>{
        this.setState({LD7: changeEvent.target.checked})
    }
    handleLD8= changeEvent =>{
        this.setState({LD8: changeEvent.target.checked})
    }
    handleLD9= changeEvent =>{
        this.setState({LD9: changeEvent.target.checked})
    }
    handleLD10= changeEvent =>{
        this.setState({LD10: changeEvent.target.checked})
    }
    handleLD11= changeEvent =>{
        this.setState({LD11: changeEvent.target.checked})
    }
    handleLD12= changeEvent =>{
        this.setState({LD12: changeEvent.target.checked})
    }
    handleLD13= changeEvent =>{
        this.setState({LD13: changeEvent.target.checked})
    }
    handleLD14= changeEvent =>{
        this.setState({LD14: changeEvent.target.checked})
    }
    handleLD15= changeEvent =>{
        this.setState({LD15: changeEvent.target.checked})
    }
    handleLD16= changeEvent =>{
        this.setState({LD16: changeEvent.target.checked})
    }
    handleLD17= changeEvent =>{
        this.setState({LD17: changeEvent.target.checked})
    }
    handleUD1= changeEvent =>{
        this.setState({UD1: changeEvent.target.checked})
    }
    handleUD2= changeEvent =>{
        this.setState({UD2: changeEvent.target.checked})
    }
    handleUD3= changeEvent =>{
        this.setState({UD3: changeEvent.target.checked})
    }
    handleUD4= changeEvent =>{
        this.setState({UD4: changeEvent.target.checked})
    }
    handleUD5= changeEvent =>{
        this.setState({UD5: changeEvent.target.checked})
    }
    handleUD6= changeEvent =>{
        this.setState({UD6: changeEvent.target.checked})
    }
    handleUD7= changeEvent =>{
        this.setState({UD7: changeEvent.target.checked})
    }
    handleUD8= changeEvent =>{
        this.setState({UD8: changeEvent.target.checked})
    }
    handleUD9= changeEvent =>{
        this.setState({UD9: changeEvent.target.checked})
    }
    handleTBR1= changeEvent =>{
        this.setState({TBR1: changeEvent.target.checked})
    }
    handleTBR2= changeEvent=>{
        this.setState({TBR2: changeEvent.target.checked})
    }
    handleTBR3= changeEvent=>{
        this.setState({TBR3: changeEvent.target.checked})
    } 
    render() {
        return (    
            <form>
                <div>
                    <h1>Welcome to Class Sync</h1>
                </div>
                <div style={{fontSize: "1.25vw"}}>
                    <b>GEs</b>
                </div>
                <div style={{marginLeft: "20px"}}>
                    <div>
                        <input type="checkbox" id="geReq1" name="Writing I" value="geReq1"/>
                        Writing I
                    </div>
                    <div>
                        <input type="checkbox" id="geReq2" name="FAH GE 1" value="geReq2"/>
                        FAH GE (Lit/Cult or Phil/Ling or Visual/Arts)
                    </div>
                    <div>
                        <input type="checkbox" id="geReq3" name="FAH GE 2" value="geReq3"/>
                        FAH GE (Lit/Cult or Phil/Ling or Visual/Arts)(Different from above)
                    </div>
                    <div>
                        <input type="checkbox" id="geReq4" name="FSC GE (Historical)" value="geReq4"/>
                        FSC GE (Historical)
                    </div>
                    <div>
                        <input type="checkbox" id="geReq5" name="FSC GE (Social)" value="geReq5"/>
                        FSC GE (Social)
                    </div>
                    <div>
                        <input type="checkbox" id="geReq6" name="FSC GE (Life Sci)" value="geReq6"/>
                        FSC GE (Life Sci)
                    </div>
                    <div>
                        <input type="checkbox" id="geReq7" name="geReq7" value="geReq7"/>
                        Engineering Ethics and Writing(1 from ENGR 181EW to 185EW)
                    </div>
                 </div>
                <div style={{fontSize: "1.25vw"}}>
                    <b>Select Completed Major Requirements:</b>
                </div>
                <div style={{marginLeft: "20px"}}>
                    <div><b>Lower Division Courses:</b></div>
                    <div style={{marginLeft: "20px"}}>
                        <div>
                            <input type="checkbox" id="ldReq1" name="CS1" value="ldReq1" defaultChecked={this.state.LD1}/> 
                            CS 1
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq2" name="CS31" value="ldReq2"/>
                            CS 31
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq3" name="CS32" value="ldReq3"/>
                            CS 32
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq4" name="CS33" value="ldReq4"/>
                            CS 33
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq5" name="CS 35L" value="ldReq5"/>
                            CS 35L
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq6" name="CS M51A or ECE M16" value="ldReq6"/>
                            CS M51A or ECE M16
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq7" name="Math 31A" value="ldReq6"/>
                            Math 31A
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq8" name="Math 31B" value="ldReq8"/>
                            Math 31B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq9" name="Math 32A" value="ldReq9"/>
                            Math 32A
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq10" name="Math 32B" value="ldReq10"/>
                            Math 32B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq11" name="Math33A" value="ldReq11"/>
                            Math 33A
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq12" name="Math 33B" value="ldReq12"/>
                            Math 33B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq13" name="Math 61" value="ldReq13"/>
                            Math 61
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq14" name="Physics 1A" value="ldReq14"/>
                            Physics 1A
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq15" name="Physics 1B" value="ldReq15"/>
                            Physics 1B
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq16" name="Physics 1C" value="ldReq16"/>
                            Physics 1C
                        </div>
                        <div>
                            <input type="checkbox" id="ldReq17" name="Physics 4AL or 4BL" value="ldReq16"/>
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
                            <input type="checkbox" id="udReq2" name="udReq2" value="udReq2"/>
                            CS 118
                        </div>
                        <div>
                            <input type="checkbox" id="udReq3" name="udReq3" value="udReq3"/>
                            CS 131
                        </div>
                        <div>
                            <input type="checkbox" id="udReq4" name="udReq4" value="udReq4"/>
                            CS M151B or ECE M116C
                        </div>
                        <div>
                            <input type="checkbox" id="udReq5" name="udReq5" value="udReq5"/>
                            CS M5151A or ECE M116L                           
                        </div>
                        <div>
                            <input type="checkbox" id="udReq6" name="udReq6" value="udReq6"/>
                            CS 180
                        </div>
                      <div>
                        <input type="checkbox" id="udReq7" name="udReq7" value="udReq7"/>
                        CS 181
                        </div>
                        <div>
                            <input type="checkbox" id="udReq8" name="udReq8" value="udReq8"/>
                            CS 130 or 152B
                        </div>
                        <div>
                            <input type="checkbox" id="udReq9" name="udReq9" value="udReq9"/>
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
                            <input type="checkbox" id="TBR1" name="TBR1" value="TBR1" onChange={this.handleTBR1}/>
                            TBR #1
                        </div> 
                        <div>
                            <input type="checkbox" id="TBR2" name="TBR2" value="TBR2" onChange={this.handleTBR2}/>
                            TBR #2
                        </div>
                        <div>
                            <input type="checkbox" id="TBR3" name="TBR3" value="TBR3" onChange={this.handleTBR3}/>
                            TBR #3
                        </div>
                        <div>
                            <TBR tbr1={this.state.TBR1} tbr2={this.state.TBR2} tbr3={this.state.TBR3}/>
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
                    <div>
                        <button type="button">
                            Save 
                        </button>
                    </div>

                </div>
            </form>
        );
    }
}

export default App;
import React from 'react'

const CSGE = ({complete}) => {
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

export default CSGE;
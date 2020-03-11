import React, { Component } from "react";
import tempResume from '../images/tempResume.pdf';

class Resume extends Component {
    render(){
        return(
            <div className="condiv">
           
    <iframe src="https://docs.google.com/gview?url=https://github.com/davidgeht/Portfolio-React-/raw/master/tempResume.pdf&embedded=true" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            

            

        )
    }
}

export default Resume
import React, { Component } from "react";
import updatedResume from '../images/updatedResume.pdf';

class Resume extends Component {
    render(){
        return(
            <div className="condiv">
           
    <iframe src="https://docs.google.com/gview?url=https://github.com/davidgeht/Portfolio-React-/raw/master/updatedResume.pdf&embedded=true" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            

            

        )
    }
}

export default Resume
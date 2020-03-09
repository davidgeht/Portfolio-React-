import React, {Component} from 'react';
import '../projectcard.css'

class Projectcard extends Component {
    render(){
        return(
            <div id="projectcard">
                <img src={this.props.img}></img>
                <h3>{this.props.title}</h3>
                <h4> Description:</h4>
                <p>{this.props.description}</p>
                <h4>{this.props.techused}</h4>
            </div>
           
        )
    }
}

export default Projectcard
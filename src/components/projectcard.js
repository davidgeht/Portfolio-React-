import React, {Component} from 'react';
import '../projectcard.css'

class Projectcard extends Component {
    render(){
        return(
            <div id="projectcard">
                <img src={this.props.img}></img>
                <h2>{this.props.title}</h2>
                <h3> Description:</h3>
                <p>{this.props.description}</p>
                <h3>{this.props.techused}</h3>
                <h3>Links:</h3>
                <p> <a href={this.props.linktogb}>Github</a></p>
                <p> <a href={this.props.linktoapp}>Website</a></p>
                
            </div>

        )
    }
}

export default Projectcard
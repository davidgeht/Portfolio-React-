import React, {Component} from 'react'
import Navitem1 from "./navitem1"
import Navitem2 from "./navitem2"
import Navitem3 from "./navitem3"
import Navitem4 from "./navitem4"
import Navitem5 from "./navitem5"
import profilepic from "../images/selfie.jpeg";

class Navbar extends Component {
    
    render() {
    return (
       <nav>
           <img src={profilepic} class="mr-3 rounded-square img-thumbnail shadow-sm" className="profilepic"></img>
           <ul>
            <Navitem1 item=" Home" tolink="/" activec={this.activeitem}></Navitem1>
            <Navitem3 item=" Projects" tolink="/project" activec={this.activeitem}></Navitem3>
            <Navitem4 item=" Resume" tolink="/skills" activec={this.activeitem}></Navitem4>
            <Navitem2 item=" About" tolink="/about" activec={this.activeitem}></Navitem2>
            <Navitem5 item=" Contact" tolink="/contact" activec={this.activeitem}></Navitem5>
           </ul>
       </nav>
        )
    }
}
export default Navbar

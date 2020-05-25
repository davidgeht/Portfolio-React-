import React, {Component} from 'react'
import Navitem1 from "./navitem1"
import Navitem2 from "./navitem2"
import Navitem3 from "./navitem3"
import Navitem4 from "./navitem4"
import Navitem5 from "./navitem5"
import Navitem6 from "./navitem6"
import profilepic from "../images/selfie.jpeg";
import Social from "./social";


class Navbar extends Component {

    render() {
    return (
       <nav>
           <img src={profilepic} class="mr-3 rounded-square img-thumbnail shadow-sm" className="profilepic"></img>
           <ul>
            <Navitem1 item=" Home" tolink="/"></Navitem1>
            <Navitem3 item=" Projects" tolink="/project" ></Navitem3>
            <Navitem6 item=" Skills" tolink="/skills" ></Navitem6>
            <Navitem4 item=" Resume" tolink="/resume" ></Navitem4>
            <Navitem2 item=" About" tolink="/about" ></Navitem2>
            <Navitem5 item=" Contact" tolink="/contact" ></Navitem5>
           </ul>
           <Social/>
           

       </nav>
        )
    }
}
export default Navbar

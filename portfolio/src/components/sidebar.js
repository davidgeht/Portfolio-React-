import React, {Component} from 'react'
import Navitem1 from "./navitem1"
import Navitem2 from "./navitem2"
import Navitem3 from "./navitem3"
import Navitem4 from "./navitem4"
import Navitem5 from "./navitem5"
import profilepic from "../images/selfie.jpeg";

class Navbar extends Component {
    constructor(props)
{
super(props);
this.state={
'NavItemActive':''
}
}
activeitem=(x)=>
{
if(this.state.NavItemActive.length>0){
document.getElementById(this.state.NavItemActive).classList.remove('active');
}
this.setState({'NavItemId':x},()=>{
document.getElementById(this.state.NavItemActive).classList.add('active');
});
};
    render() {
    return (
       <nav>
           <img src={profilepic} class="mr-3 rounded-square img-thumbnail shadow-sm" className="profilepic"></img>
           <ul>
            <Navitem1 item=" Home" tolink="/" activec={this.activeitem}></Navitem1>
            <Navitem3 item=" Projects" tolink="/education" activec={this.activeitem}></Navitem3>
            <Navitem4 item=" Resume" tolink="/skills" activec={this.activeitem}></Navitem4>
            <Navitem2 item=" About" tolink="/about" activec={this.activeitem}></Navitem2>
            <Navitem5 item=" Contact" tolink="/contact" activec={this.activeitem}></Navitem5>
           </ul>
       </nav>
        )
    }
}
export default Navbar

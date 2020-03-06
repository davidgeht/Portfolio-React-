import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem5 extends Component {
render() {
return (
<li id={this.props.item}><i class ="far fa-address-book"></i>
<Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>{this.props.item}</Link>
</li>
)
}
}
export default Navitem5
import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem1 extends Component {
render() {
return (
<li id={this.props.item}><i class ="fas fa-home"></i>
<Link to={this.props.tolink} >{this.props.item}</Link>
</li>
)
}
}
export default Navitem1
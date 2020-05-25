import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem6 extends Component {
render() {
return (
<li id={this.props.item}><i class ="fas fa-laptop-code"></i>
<Link to={this.props.tolink}>{this.props.item}</Link>
</li>
)
}
}
export default Navitem6
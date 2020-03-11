import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem2 extends Component {
render() {
return (
<li id={this.props.item}><i class="far fa-user"></i>
<Link to={this.props.tolink} >{this.props.item}</Link>
</li>
)
}
}
export default Navitem2
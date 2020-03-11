import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem3 extends Component {
render() {
return (
<li id={this.props.item}><i class ="fa fa-archive"></i>
<Link to={this.props.tolink}>{this.props.item}</Link>
</li>
)
}
}
export default Navitem3
import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem4 extends Component {
render() {
return (
<li id={this.props.item}><i class ="fas fa-file-alt"></i>
<Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>{this.props.item}</Link>
</li>
)
}
}
export default Navitem4
import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
render() {
return (
<div className="condiv home">
<ReactTypingEffect className="typingeffect" text={[`Hi I'm David`,`Welcome to my page !`, `I'm a Full Stack Web Developer with a certificate from the University Of Toronto `, `Looking forward to collaborating ! `]} speed={100} eraseDelay={700}/>

</div>
)
}
}
export default Home
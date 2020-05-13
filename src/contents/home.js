import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
render() {
return (
<div className="condiv home">
<ReactTypingEffect className="typingeffect" text={[`Hi I am David`,`I am a web developer`, `Currently I just received my certificate at the Univeristy of Toronto's Full Stack Coding Bootcamp`]} speed={100} eraseDelay={700}/>

</div>
)
}
}
export default Home
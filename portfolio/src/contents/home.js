import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/social'
class Home extends Component {
render() {
return (
<div className="condiv home">
<ReactTypingEffect className="typingeffect" text={[`I am a novice web developer`, `Currently studying at the Univeristy of Toronto's Full Stack Coding Bootcamp`]} speed={100} eraseDelay={700}/>
<Social />
</div>
)
}
}
export default Home
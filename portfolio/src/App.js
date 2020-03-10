import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/sidebar';
import Home from './contents/home';
import About from './contents/about';
import Project from './contents/project';
import Resume from './contents/resume';
import Contact from './contents/contact';

function App() {
return (
<Router>
<div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/project">
    <Project />
    </Route>
    </div>
</Router>
)
}
export default App;
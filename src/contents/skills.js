import React, { Component } from 'react';
import jsImage from '../images/jsIcon.png';
import cssImage from '../images/cssIcon.png';
import htmlImage from '../images/htmlIcon.png';
import nodeImage from '../images/nodejsIcon.png';
import npmIcon from '../images/npmIcon.png';
import reactIcon from '../images/reactIcon.png';
import expressIcon from '../images/express-facebook-share.png';
import jqueryIcon from '../images/jqueryIcon.png';
import mongoIcon from '../images/mongodbIcon.png';
import mysqlIcon from '../images/mysqlIcon.png';


class Skills extends Component {
    render(){
        return(
            <div className="condiv" >
                <h1 class="title">Technical Skills</h1>
                    <div className="row">
                        <h2 className="techTitle"> Languages</h2>
                            <div className="lang">
                                <img src={jsImage} style={{width:"250px", height:"250px"}} className="LangIcons"></img>
                                <img src={cssImage} style={{width:"250px", height:"250px"}} className="LangIcons"></img>
                                <img src={htmlImage} style={{width:"250px", height:"250px"}} className="LangIcons"></img>
                            </div>
                    </div>
                    <div className="row">
                        <h2 className="techTitle">Libraries & Frameworks</h2>
                            <div className="libs">
                               
                                <img src={nodeImage} style={{width:"250px", height:"250px"}}  className="LangIcons"></img>
                                <img src={reactIcon} style={{width:"250px", height:"250px"}} className="LangIcons"></img>
                                <img src={jqueryIcon} style={{width:"300px", height:"254px"}}  className="LangIcons"></img>
                                <img src={expressIcon} style={{width:"300px", height:"109px", paddingRight:"15px"}} className="LangIcons"></img>
                                <img src={npmIcon} style={{width:"300px", height:"143px"}} className="LangIcons"></img>
                                
                            </div>

                    </div>
                    <div className="row">
                        <h2 className="techTitle">Databases</h2>
                            <div className="database">
                                <img src={mongoIcon} style={{width:"250px", height:"250px", paddingRight:"15px"}}  className="LangIcons"></img>
                                <img src={mysqlIcon} style={{width:"250px", height:"250px"}}  className="LangIcons"></img>

                            </div>
                    </div>
            </div>
        )
    }
}
export default Skills
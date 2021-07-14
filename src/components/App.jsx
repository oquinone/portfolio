import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import './globals.scss';
import './App.scss';

import Calc from './Images/Calc.png';
import Clock from './Images/Clock.png';
import Weather from './Images/weather.png';
import Landing from './Images/landing.png';
import Photo  from './Images/landingpage2.png';

class App extends Component {
    // state = {  }
    render() { 
        return (
            <div id="portfolio" className="p-all">
                <div id="portfolio-intro" className="p-container-all container m-b">
                    <h1>Omar Quiñones</h1>
                    <ul className="flex-c">
                        <a 
                            href="https://www.freecodecamp.org/certification/oquinone/responsive-web-design" 
                            target="_blank" 
                            rel="noreferrer">
                            <li><FontAwesomeIcon icon={ faFreeCodeCamp }/></li>
                        </a>
                        <a 
                            href="https://github.com/oquinone"
                            target="_blank" 
                            rel="noreferrer">
                            <li> <FontAwesomeIcon icon={ faGithubSquare }/> 
                            </li>
                        </a>
                        <li><FontAwesomeIcon icon={ faAt }/></li>
                    </ul>
                </div>
                <div id="portfolio-about" className="p-container-all m-b container">
                    <h2>About <hr/>
                    </h2>
                    <p>Future Software Engineer. Graduated from UC Santa Cruz in 2020 with a degree in Computer Science. 
                        On my free time I like to lift weights, do yoga, and learn new technologies. 
                        Currently I am interested in becoming a full stack engineer.</p>
                </div>

                <div id="portfolio-languages" className="p-container-all m-b container">
                    <h2>Languages</h2><hr/>
                    <p>C++/C, Java, Javascript, Python</p>
                </div>

                <div id="portfolio-tech" className="p-container-all m-b container">
                    <h2>Technologies</h2><hr/>
                    <p>React, HTML, CSS, Sass, Bootstrap, Flexbox, Git, Agile Development Principles, Linux/Unix, Express, Mongodb</p>
                </div>

                <div id="projects" className="p-container-all container">
                    <h2>Projects</h2><hr/>
                    <div className="flex-se projects">
                        <div className="projects-container">
                            <h2>Landing Page</h2>
                            <a 
                                href="https://oquinone.github.io/landingpage/" 
                                target="_blank" 
                                rel="noreferrer">
                                <img src={Landing} alt="Landing Page" className="project-images"/>
                            </a>
                        </div>
                        <div className="projects-container">
                            <h2>Landing Page 2</h2>
                            <a 
                                href="https://oquinone.github.io/landingpage-2/" 
                                target="_blank" 
                                rel="noreferrer">
                                <img src={Photo} alt="Landing Page" className="project-images"/>
                            </a>
                        </div>
                        <div id="projects-3" className="projects-container">
                            <h2>Weather App</h2>
                            <a 
                                href="https://oquinone.github.io/weather_app/" 
                                target="_blank" 
                                rel="noreferrer">
                                <img src={Weather} alt="Weather" className="project-images"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex-se projects">
                        <div id="projects-1" className="projects-container">
                            <h2>Javascript Calculator</h2>
                            <a 
                                href="https://oquinone.github.io/javascript_calculator/" 
                                target="_blank" 
                                rel="noreferrer">
                                <img src={Calc} alt="Calculator" className="project-images"/>
                            </a>
                        </div>
                        <div id="projects-2" className="projects-container">
                            <h2>Javascript Timer</h2>
                            <a 
                                href="https://oquinone.github.io/clock/" 
                                target="_blank" 
                                rel="noreferrer">
                                <img src={Clock} alt="Clock" className="project-images"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;
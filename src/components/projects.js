import React from 'react';
import '../styling/globals.scss';
import '../styling/projects.scss';

import Calc from '../Images/Calc.png';
import Clock from '../Images/Clock.png';
import Weather from '../Images/weather.png';
import Landing from '../Images/landing.png';
import Photo  from '../Images/landingpage2.png';
import Movie from '../Images/movies.png';

export const Projects = () => {
    return(
        <div className=" projects">
            <div className="projects-title">
                <h1>Projects</h1>
                <hr/>
            </div>
            <div className="projects-container">
                <div>
                    <h2>Movies Database</h2>
                    <a 
                        href="https://oquinone.github.io/moviedb/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Movie} alt="Movies" className="project-images"/>
                    </a>
                </div>
                <div>
                    {/* <p>Created with Reactjs and styled with Sass. This project retrieves
                        movie data from making fetch Api request to The Movie Database.
                        JSON data is then retrieved and dispalyed on screen accordingly. 
                        I also took advantage of Flexbox to display components correctly.
                        It also is responsive to it will adjsut to any screen size.
                    </p> */}
                    <ul>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Flexbox</li>
                        <li>Fetch Api</li>
                        <li>Dipslay JSON Data</li>
                        <li>Responsive</li>
                    </ul>
                </div>
            </div>
            <div className="projects-container">
                <div>
                    <h2>Landing Page</h2>
                    <a 
                        href="https://oquinone.github.io/landingpage/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Landing} alt="Landing Page" className="project-images"/>
                    </a>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Flexbox</li>
                        <li>Responsive</li>
                    </ul>
                </div>
            </div>
            <div className="projects-container">
                <div>
                    <h2>Landing Page 2</h2>
                    <a 
                        href="https://oquinone.github.io/landingpage-2/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Photo} alt="Landing Page" className="project-images"/>
                    </a>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Flexbox</li>
                        <li>Responsive</li>
                        <li>React-bootstrap npm package</li>
                    </ul>
                </div>
            </div>
            <div className="projects-container">
                <div>
                    <h2>Weather App</h2>
                    <a 
                        href="https://oquinone.github.io/weather_app/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Weather} alt="Weather" className="project-images"/>
                    </a>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Flexbox</li>
                        <li>Responsive</li>
                    </ul>
                </div>
            </div>
            <div className="projects-container">
                <div>
                    <h2>Javascript Calculator</h2>
                    <a 
                        href="https://oquinone.github.io/javascript_calculator/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Calc} alt="Calculator" className="project-images"/>
                    </a>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Flexbox</li>
                        <li>Responsive</li>
                    </ul>
                </div>
            </div>
            <div className="projects-container">
                <div>
                    <h2>Javascript Timer</h2>
                    <a 
                        href="https://oquinone.github.io/clock/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Clock} alt="Clock" className="project-images"/>
                    </a>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Flexbox</li>
                        <li>Responsive</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
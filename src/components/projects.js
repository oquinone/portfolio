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
                <div className="info">
                    <p>This project was created with Reactjs & styled with Sass.
                        This projet works by having the user enter in a Movie title.
                        Then a HTTP request is sent to The Movie Database Api using Fetch.
                        If a match is found a JSON object is returned, which I then display 
                        the movie poster, movie background image, title, and description of 
                        movie; all from the JSON object. The web app is also responsive.
                    
                    </p>
                    
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
                <div className="info">
                    <p>
                        Responsive landing page created with Reactjs and Sass. 
                        I created mixins with Sass for screen breakpoints. 
                        This allowed me to make desireable changes to the styling
                        for best results in UI on any device. 
                        Also took advantage of Flexbox!
                    </p>
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
                <div className="info">
                    <p>This landing page was more image based.
                        I had to find a way to make the images look presentable
                        on any screen.
                        I also passed the images throught an image compressing
                        site to reduce the size of the images for speed.
                        Created with React, Sass and Flexbox.
                    </p>
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
                <div className="info">
                    <p>
                        This weather app I created was to learn how to make Api calls.
                        I struggled for a while trying to understand the useEffect hook
                        in react. I had to find a way to call useEffect everytime the 
                        user entered in a City. Through perseverance I succeded! 
                        I then put all the calls inside a carousel allowing the user
                        to see all their weather information.
                    </p>
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
                <div className="info">
                    <p>I created this Calculator when I was working on freeCodeCamps
                        Front End Development Certificate. I build it using reactjs 
                        where I had to carefully take care of state to update the screen
                        accordingly to the users buttons clicks. 
                    </p>
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
                <div className="info"> 
                    <p>
                        This also was a project freeCodeCamps Front End Certificate.
                        Very easy project and I liked the way the CSS looks. Thought
                        it was worth putting on here. Created with Reactjs and Sass. 
                    </p>
                </div>
            </div>
        </div>
    );
}
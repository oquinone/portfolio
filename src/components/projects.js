import React from 'react';
import '../styling/globals.scss';
import '../styling/projects.scss';

import Calc from '../Images/Calc.png';
import Clock from '../Images/Clock.png';
import Weather from '../Images/weather.png';
import Landing from '../Images/landing.png';
import Photo  from '../Images/landingpage2.png';
import Movie from '../Images/movies.png';
import Insta from '../Images/insta.png';

export const Projects = () => {
    return(
        <div className=" projects">
            <div className="projects-title">
                <h1>Projects</h1>
                <hr/>
            </div>
            <div className="projects-container">
                <div className="title-image-container">
                    <h2>Instagram Profile Page Clone <br/>w/ Login Page</h2>
                    <a 
                        href="https://oquinone.github.io/instagram_clone/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Insta} alt="Insta" className="project-images"/>
                    </a>
                </div>
                <div className="info">
                    <p>My goals for this project was to create a Full Stack Project. 
                        The frontend is in React while the backend is in Nodejs/Express
                         and the database is Mongodb (MERN Stack). The functionality of the project
                         works by allowing the user to sign up/login. After a succesfull logged in
                         the user is Authenticated with passport js. The Authentication works
                         by storing a cookie in the users browser. After being authenticated the user is
                         transported to a clone like appearance of instagrams profile page on the web.
                         The user is able to uploads images to their profile, which are saved in mongodb.
                         The user can also update their bio and change their profile picture.
                    </p>
                    <p>Tech Used: MERN Stack, Sass, React-Bootstrap, Flexbox, Redux, 
                        Passport js, Express-Session,</p>
                </div>
            </div>
            <div className="projects-container">
                <div className="title-image-container">
                    <h2>Movies Database</h2>
                    <a 
                        href="https://oquinone.github.io/moviedb/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Movie} alt="Movies" className="project-images"/>
                    </a>
                </div>
                <div className="info">
                    <p>
                        The goal of this project was work with a third party Api. To be able
                        to make a single request to the Api and display the JSON response data
                        as desired.
                    </p>
                    <p>Tech used: React, Sass, Flexbox, The Movie Database Api </p>
                </div>
            </div>
            <div className="projects-container">
                <div className="title-image-container">
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
                        The goal of this project was to create a responsive landing page. 
                        The responisveness is adjusted using breakpoint mixins from Sass.
                        The site adjusts for a phone, tablet, and large monitor screen.
                    </p>
                    <p>Tech used: React, Sass, Flexbox, React-bootstrap components</p>
                </div>
            </div>
            <div className="projects-container">
                <div className="title-image-container">
                    <h2>Landing Page 2</h2>
                    <a 
                        href="https://oquinone.github.io/landingpage-2/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Photo} alt="Landing Page" className="project-images"/>
                    </a>
                </div>
                <div className="info">
                    <p>
                        The goal of this landing page was to try to create a more
                        image based landing page that is respnonsive. The images displayed 
                        on screen have been compressed to its smallest form to try 
                        and improve the speed of the site.
                    </p>
                    <p>Tech used: React, Sass, Flexbox</p>
                </div>
            </div>
            <div className="projects-container">
                <div className="title-image-container">
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
                        The goal of this project was similar to the Movie Database Project. 
                        To be able to make request to a third party Api and display the 
                        desired results on screen. 
                    </p>
                    <p>Tech Used: Reactjs, The Open Weather Api</p>
                </div>
            </div>
            <div className="projects-container">
                <div className="title-image-container">
                    <h2>Javascript Calculator</h2>
                    <a 
                        href="https://oquinone.github.io/javascript_calculator/" 
                        target="_blank" 
                        rel="noreferrer">
                        <img src={Calc} alt="Calculator" className="project-images"/>
                    </a>
                </div>
                <div className="info">
                    <p>
                        The goal of this project was to manipulate reacts state properply according
                        to user input and return the corect response.
                    </p>
                </div>
            </div>
        </div>
    );
}
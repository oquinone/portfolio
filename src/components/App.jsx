import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import '../styling/globals.scss';
import '../styling/App.scss';

import { Projects } from './projects';

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
                    <p>React, HTML, CSS, Sass, Bootstrap, Flexbox, Git, Agile Development Principles, Linux/Unix, Express, Mongodb, React-Redux</p>
                </div>

                <>
                    <Projects/>
                </>
            </div>
        );
    }
}
 
export default App;
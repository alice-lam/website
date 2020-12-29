import React from 'react';
import App from '../App';
import './../App.scss';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';
import Footer from '../components/footer.js';
import Notification from '../components/notification.js';
import Screenshot from "../components/images/delldesign.png";

const Developer = () => (
    <App>
        <Header />
        <Subheader />
        <Notification />
        <section id="developer">
            <h1 className="navbar-title"> SKILLSET </h1>
            <div id="skills">
                <div className="container">
                    <h2>Back-end</h2>
                    <ul>
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>Python</li>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="container">
                    <h2>Front-end</h2>
                    <ul>
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>SASS / SCSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                    </ul>
                </div>
                <div className="container">
                    <h2>Other</h2>
                    <ul>
                        <li>Github / Gitlab</li>
                        <li>CI / CD</li>
                        <li>Selenium</li>
                        <li>Gulp</li>
                        <li>Webpack</li>
                    </ul>
                </div>
            </div>
            <h1 className="navbar-title"> PROJECTS </h1>
            <div id="projects">
                <div className="proj-container">
                    <h2>delldesignsystem.com</h2>
                    <p>I'm currently working on the Design Language System at Dell Technologies
                        to help develop a Design System that helps streamline UI designs and promote consistency across all platforms at Dell. 
                    </p>
                    <a href="https://www.delldesignsystem.com"><img src={Screenshot} alt="Dell Design System"></img></a>
                </div>
            </div>
        </section>
        <Footer />
    </App>

);

export default Developer;

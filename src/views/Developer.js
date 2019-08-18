import React from 'react';
import App from '../App';
import './../App.scss';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';
import Image from "../components/images/delldesign.png";

const Developer = () => (
    <App>
        <Header />
        <Subheader />
        <section id="developer">
            <div id="content">
                <h1 className="navbar-title"> DELLDESIGNSYSTEM.COM </h1>
                <p>I'm currently working on the UI Core team at Dell Technologies
                    to help develop a Design System that will be used across across Dell.
                </p>
                <p>   
                    This project will help streamline all UI designs and promote consistency across all platforms. 
                </p>
                <a href="https://www.delldesignsystem.com"><img src={Image} alt="Dell Design System"></img></a>
            </div>
        </section>
    </App>

);

export default Developer;

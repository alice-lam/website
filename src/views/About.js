import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

const About = () => (
    <App>
       <div id="page" class="container">
		  <div id="content">
			  <div class="title">
				  <h2>About Me.</h2>
				  <span class="byline">Mauris vulputate dolor sit amet nibh</span> </div>
			    <p>About me text.</p>
            </div>
        </div>                               
    </App>
);

export default About;
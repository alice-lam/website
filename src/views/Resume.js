import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

const Resume = () => (
    <App>
       <div id="page" class="container">
		  <div id="content">
            <div class="title">
				<center><h2>Resume</h2></center>
            </div>
            <center><embed src="__files/Resume2018.pdf" width="900px" height="1150px" /></center>
            <center><p>To download this file, please click < a href = "__files/Resume2018.pdf"> here</a>.</p></center>
            </div>
            
        </div>                               
    </App>
);

export default Resume;
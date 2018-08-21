import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

const Resume = () => (
    <App>
       <div id="page" class="container">
		  <div id="content">

                <center><h3>ALICE LAM</h3></center>
                <center>alice94@sbcglobal.net</center>
                <center><p>12708 Withers Way • Austin, TX • (512) 207 - 0364</p></center>

                <h3><p>EDUCATION</p></h3>
                <h3>University of Texas at Austin 7</h3>
                BS Electrical and Computer Engineering
                <p>2013 - 2017</p>

                <h3>John B. Connally High School</h3> 
                <p>Class of 2013</p>

                 <h3><p>WORK / PROJECT EXPERIENCE</p></h3>
                <h3>Dell Technologies</h3> 
                Software Engineer
                <p>March 2018 - Present</p>

                <h3>Dell EMC</h3> 
                Senior Design Team
                <p>Spring 2017 - Fall 2017</p>

                <h3>Texas Commission on Environmental Quality</h3> 
                MLEIP Intern
                <p>Summer 2016</p>

                <h3>UT Applied Research Laboratories</h3> 
                Intern
                <p>Summer 2013</p>

                <p>For a full resume, please click < a href = "__files/Resume2017.pdf"> here</a>.</p>
            </div>
        </div>                               
    </App>
);

export default Resume;
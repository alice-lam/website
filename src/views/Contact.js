import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

const Contact = () => (
    <App>
       <div id="page" class="container">
		  <div id="content">
			<div class="title">
				<center><h2>Contact Page</h2></center>
				<center><h3>You can reach me through the following:</h3></center>
            </div>
                <center><h4>E-mail</h4></center>
                <center><p>alice94@sbcglobal.net</p></center>

                <center><h4>LinkedIn</h4></center>
                <center><p>www.linkedin.com/in/ccalicelam</p></center>

                <center><h4>Github</h4></center>
                <center><p>www.github.com/alice-lam</p></center>
            </div>
        </div>                               
    </App>
);

export default Contact;
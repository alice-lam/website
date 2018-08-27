import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

const Contact = () => (
    <App>
       <div id="page" class="container">
		  <div id="content">
			<div class="title">
				<h2>Contact Page</h2>
				<h3>You can reach me through the following:</h3>
            </div>
			    <h4>E-mail</h4>
                <p>alice94@sbcglobal.net</p>

                <h4>LinkedIn</h4>
                <p>www.linkedin.com/in/ccalicelam</p>

                <h4>Github</h4>
                <p>www.github.com/alice-lam</p>

            </div>
        </div>                               
    </App>
);

export default Contact;
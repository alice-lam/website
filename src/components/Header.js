import React from 'react';

const Header = () => (

<div id="header-wrapper">
	        <div id="header" className="container">
		        <div id="logo">
			        <h1><a href="/home">Alice Lam</a></h1>
		        </div>
		    <div id="menu">
			    <ul>
				    <li className="page_current"><a href="/home">Home</a></li>
				    <li className="page"><a href="/resume">Resume</a></li>
			    </ul>
		    </div>
	  </div>
</div>
);

// Get all buttons with className="page" inside the container
var button= document.getElementsByClassName("page");

button.onclick = function() {
    button.classList.toggle('_current');
};
export default Header
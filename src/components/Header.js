import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (

<div id="header-wrapper">
	        <div id="header" class="container">
		        <div id="logo">
			        <h1><a href="#">Alice Lam</a></h1>
		        </div>
		    <div id="menu">
			    <ul>
				    <li class="page_current"><a href="/#" accesskey="1" title="">Home</a></li>
				    <li class="page"><a href="/resume" accesskey="3" title="">Resume</a></li>
				    <li class="page"><a href="/projects" accesskey="4" title="">Projects</a></li>
				    <li class="page"><a href="/contact" accesskey="5" title="">Contact</a></li>
			    </ul>
		    </div>
	  </div>
</div>
);

// Get the container element
var menu = document.getElementById("menu");
// Get all buttons with class="page" inside the container
var button= document.getElementsByClassName("page");

button.onclick = function() {
    button.classList.toggle('_current');
};
export default Header
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
				    <li class="current_page_item"><a href="/#" accesskey="1" title="">Home</a></li>
				    <li><a href="/resume" accesskey="3" title="">Resume</a></li>
				    <li><a href="/projects" accesskey="4" title="">Projects</a></li>
				    <li><a href="/contact" accesskey="5" title="">Contact</a></li>
			    </ul>
		    </div>
	  </div>
</div>

);
export default Header
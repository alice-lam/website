import React, { Component } from 'react';
import './App.css';
import './fonts.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header-wrapper">
	        <div id="header" class="container">
		        <div id="logo">
			        <h1><a href="#">Alice Lam</a></h1>
		        </div>
		    <div id="menu">
			    <ul>
				    <li class="current_page_item"><a href="/#" accesskey="1" title="">Home</a></li>
            <li><a href="/about" accesskey="2" title="">About</a></li>
				    <li><a href="/resume" accesskey="3" title="">Resume</a></li>
				    <li><a href="/projects" accesskey="4" title="">Projects</a></li>
				    <li><a href="/contact" accesskey="5" title="">Contact</a></li>
			    </ul>
		    </div>
	  </div>
</div>
  {/* <div id="header-featured"></div> */}
  <div id="wrapper">
	  <div id="page" class="container">
		  <div id="content">
			  <div class="title">
				  <h2>Welcome to my website.</h2>
				  <span class="byline">Mauris vulputate dolor sit amet nibh</span> </div>
			    <p>This is <strong>Clear-Cut</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. All photographs on this site are my own. Source code for this project can be found  <a href="https://github.com/alice-lam/website" rel="nofollow">here</a>.</p>
			    <a href="#" class="button">Explore Work.</a> 
        </div>
        </div>
      </div>
  </div>
    );
  }
}

export default App;

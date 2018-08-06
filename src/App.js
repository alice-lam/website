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
				    <li class="current_page_item"><a href="#" accesskey="1" title="">About</a></li>
				    <li><a href="#" accesskey="2" title="">Resume</a></li>
				    <li><a href="#" accesskey="3" title="">Projects</a></li>
				    <li><a href="#" accesskey="4" title="">Contact</a></li>
			    </ul>
		    </div>
	  </div>
</div>

      <div id="header-featured">
      </div>
	      <div id="banner-wrapper">
		      <div id="banner" class="container">
			      <h3>Hi. Welcome to my website.</h3>
			      <span>Temporary placeholder text.</span>
		      </div>
	      </div>
      </div>
    );
  }
}

export default App;

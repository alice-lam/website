import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

const Home = () => (
    <App>
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
    </App>
);

export default Home;

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
                    <h4 class="typewrite" data-period="1000" data-type='[ " Hello, my name is Alice.", "I am a full-stack developer located in Austin, TX.", "I enjoy building everything from small web applications to large scale business APIs." ]'>
                        <span class="wrap"></span>
                    </h4>
                </div>
                    <p>I am currently a Software Engineer at Dell Technologies. I graduated with a BS in Electrical and Computer Engineering from the University of Texas at Austin, with a technical focus on software programming. I have experience in object oriented programming such as C/C++ and Java, and also have experience in React front-end development. I am always looking for opportunities where I can apply my skills as well as expand my knowledge.</p>
                    <p>Outside of work, I am a pretty big foodie. I am an active member Austin's Yelp Elite Community. I also enjoy experimenting with photography of both food and people.</p>
                    <p>This portfolio is based off of <strong>Clear-Cut</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. All photographs on this site are my own. Source code for this project can be found  <a href="https://github.com/alice-lam/website" rel="nofollow">here</a>.</p>
                </div>
                <div>
                    <a href="/projects" class="button">Explore Work.</a> 
                </div>
            </div>
        </div>                          
    </App>

);

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 50;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

export default Home;

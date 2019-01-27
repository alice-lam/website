import React from 'react';
import App from '../App';
import Header from '../components/header.js';

const Home = () => (
    <App>
    <Header/>
      <section id="home">
        <div id="content">
            <div className="title">
                <h2>Welcome to my website.</h2>
                <h4>Hello, my name is Alice. I am a full-stack developer located in Austin, TX. I enjoy building everything from small web applications to large scale business APIs.</h4>
            </div>
                <p>I am currently a Software Engineer at Dell Technologies. I graduated from the University of Texas at Austin with a BS in Electrical and Computer Engineering, with a technical focus on software development. I have experience in object oriented programming such as C/C++ and Java, and also have experience in React front-end development. I am always looking for opportunities where I can apply my skills as well as expand my knowledge.</p>
                <p>Outside of work, I am a pretty big foodie. I am an active member Austin's Yelp Elite Community. I also enjoy experimenting with photography of both food and people.</p>
            </div>
        </section>                          
    </App>

);

export default Home;

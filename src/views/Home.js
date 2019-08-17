import React from 'react';
import App from '../App';
import './../App.scss';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';
import Image from '../components/images/profile.png';

const Home = () => (
    <App>
        <Header />
        <Subheader />
        <section id="home">
            <div id="content">
                <div className="home-banner">
                    <img src={Image} alt="profile"/>
                </div>
                <h1 className="title">Welcome to my website.</h1>
    
                <p>Hi, my name is Alice! I am currently a Software Engineer at Dell Technologies. I graduated from the University of Texas at Austin with a BS in Electrical and Computer Engineering, with a technical focus on software development. I have experience in object oriented programming such as C/C++ and Java, and also have experience in React front-end development. I am always looking for opportunities where I can apply my skills as well as expand my knowledge.</p>
                
                <p>Outside of work, I am a pretty big foodie. I am an active member Austin's Yelp Elite Community, and run a food instagram/blog on the side, @treatsbyalice, where I experiment with baking and food photography.</p>
            </div>
        </section>
    </App>

);

export default Home;

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
    
                <p>Hi, my name is Alice, nice to meet you! </p>
                <p>A little about myself: I graduated from UT Austin in 2017 with a BS in Electrical and Computer Engineering, with a technical focus on software development. I am currently working at Dell as a software engineer helping architect and build out Dell's Design Language System. I have development experience with both OOP languages such as C++ and Java, as well as experience with all front end frameworks; I am always open to new opportunities to learn and expand my skillset though! </p>
                <p>Outside of work, I enjoy relaxing through hiking, reading, and playing games. I am also an active member Austin's Yelp Elite Community, and run a food instagram/blog on the side (@treatsbyalice), where I experiment with baking and food photography.</p>
            </div>
        </section>
    </App>

);

export default Home;

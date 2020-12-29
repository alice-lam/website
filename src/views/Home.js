import React from 'react';
import App from '../App';
import './../App.scss';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';
import Footer from '../components/footer.js';
import Profile from '../components/images/home.png';
import Signature from '../components/images/signature.png';

const Home = () => (
    <App>
        <Header />
        <Subheader />
        <section id="home">
            <div id="content">
                <div className="home-banner">
                    <img src={Profile} className="banner-img" alt="profile"/>
                    <div className="intro-container">
                        <h1 className="title">Welcome to my site!</h1>
                        <p>Hello, my name is Alice, nice to meet you! </p>
                        <p>A little about myself: I graduated from UT Austin in 2017 with a BS in Electrical and Computer Engineering, with a technical focus on software development. I am currently working at Dell as a software engineer helping architect and build out Dell's Design Language System. I have back-end experience with OOP languages such as C++ and Java, as well as development experience with all major front-end frameworks. I am always trying to keep up with the latest tech, and am open to new opportunities to continue to learn and expand my skillset! </p>
                        <p>Outside of work, I enjoy relaxing through hiking, reading, and playing games. I am also an active member Austin's Yelp Elite Community, and run a food instagram/blog on the side (@treatsbyalice), where I experiment with baking and food photography.</p>
                        <br></br>
                        <p>Thanks for taking the time to visit!</p>
                        <p>Alice Lam</p>
                        <img src={Signature} id="signature" alt="signature"/>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </App>

);

export default Home;

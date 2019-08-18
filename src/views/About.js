import React from 'react';
import App from '../App';
import './../App.scss';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';
import Image from '../components/images/headshot.png';

const About = () => (
    <App>
        <Header />
        <Subheader />
        <section id="about">
            <div id="content">
                <img src={Image} alt="profile"/>
                <div className="profile-container">
                    <h1 className="title">About Alice</h1>
                    <p>
                        I was born and raised in Austin, TX. I studied at the University of Texas at Austin and graduated in 2017 with a B.S in Electrical and Computer Engineering, 
                        with a technical focus in software development. I currently work as a Software Engineer at Dell Technologies. 
                    </p>
                    <p>
                        I have an extensive list of hobbies I keep busy with outside of work, which include:
                    </p>
                        <br/>
                        <ul>
                            <li>
                                <h2>Building PCs.</h2>
                                <p>I enjoy helping friends build out their own personal computers. Also it's quite a fun experience to put together something that you use everyday.
                                    I currently use my PC daily to play a variety of games, stream online, and to write code.
                                </p>
                            </li>
                            <li>
                                <h2>Baking</h2>
                                <p>This is a hobby that I enjoy on occasion. It started out with me disliking most cakes and pastries because of how sweet and sugary most bakeries made them.
                                I often get requests from friends and family to bake sweet treats for them that were more flavorful, and use less sugar. Always a great gift for any party!
                                </p>
                            </li>
                            <li>
                                <h2>Being a Foodie</h2>
                                <p>My dad has been in the restaurant business, so I always enjoyed food from a young age. It led to me wanting to try other types of cusine,'
                                    and somehow in college I began to start trying out restaurants around me. Eventually, I began sharing my thoughts on all these new places on Yelp,
                                    which led me to join the Yelp Elite community here in Austin. Now I get the luxury of being invited to 
                                </p>
                            </li>
                            <li><h2>Hand Lettering and Doodling</h2>
                                <p>For those who know me well, I take pride in the notes I take. I document my notes well, and add flair at the ends. Lettering has been a recent hobby
                                    and I've even picked up foiling in addition to preserve the lettering for more formal occasions.
                                </p>
                            </li>
                            <li>
                            <h2>Being Outdoors</h2>
                                <p>This is a difficult one, since Texas is known to be blazing hot for about 50% of the year; Whenever the weather is actually
                                    good enough to be outside, I do enjoy hiking and exploring new trails. I also enjoy traveling to other destinations to hike as well.
                                </p>
                            </li>
                        </ul>
                        <br/>
                        <h2>Contact Info</h2>
                        <p>
                            <ul>
                                <li>LinkedIn: www.linkedin.com/in/ccalicelam</li>
                                <li>Email: alice94@sbcglobal.net</li>
                                <li>Phone: (512)207-0364</li>
                            </ul>
                        </p>
                </div>
            </div>

        </section>
    </App>

);

export default About;

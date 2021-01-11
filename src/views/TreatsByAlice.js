import React from 'react';
import App from '../App';
import './../App.scss';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';
import Tracker from '../components/tracker.js';
import Footer from '../components/footer.js';
import foodcover from '../components/images/instagram.png';
import insta1 from '../components/images/insta1.png';
import insta2 from '../components/images/insta2.png';
import insta3 from '../components/images/insta3.png';
import insta4 from '../components/images/insta4.png';

const Treatsbyalice = () => (
    <App>
        <Header />
        <Subheader />
        <section id="treatsbyalice">
            <div id="discover">
                <a href="https://instagram.com/treatsbyalice"><img src={foodcover} alt="where-to-eat"/></a>
            </div>
            <div id="ad">
                <i className="fab fa-instagram"></i>
                <div>
                    <h2>FOLLOW ME ON INSTAGRAM</h2><b>@treatsbyalice</b>
                </div>
                <Tracker />
                <div className="gallery-container">
                    <a href="https://www.instagram.com/p/B2Md48MlvOv/"><img src={insta1} alt="treatsbyalice"/></a>
                    <a href="https://www.instagram.com/p/By0LUyyFTLi/"><img className="gallery-img" src={insta2} alt="treatsbyalice"/></a>
                    <a href="https://www.instagram.com/p/BqxT0KsFcE0/"><img className="gallery-img" src={insta3} alt="treatsbyalice"/></a>
                    <a href="https://www.instagram.com/p/BzLV9HFFjNq/"><img className="gallery-img" src={insta4} alt="treatsbyalice"/></a>
                </div>
            </div>
        </section>
        <Footer />
    </App>

);

export default Treatsbyalice;

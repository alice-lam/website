import React from 'react';
import App from '../App';
import './../App.scss';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';

const Developer = () => (
    <App>
        <Header />
        <Subheader />
        <section id="home">
            <div id="content">
                <p>Developer Work In Progress.</p>
    
            </div>
        </section>
    </App>

);

export default Developer;

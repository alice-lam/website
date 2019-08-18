import React from 'react';
import App from '../App';
import './../App.scss';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';

const Treatsbyalice = () => (
    <App>
        <Header />
        <Subheader />
        <section id="treatsbyalice">
            <div id="content">
                <p>Treats by Alice Page is still WIP.</p>
            </div>
        </section>
    </App>

);

export default Treatsbyalice;

import React, { Component } from "react";
import "./styles/_header.scss";
import Image from "./images/logo.png";

class header extends Component {
  render() {
    return (
      <div className="navbar-container">
        <img src={Image} alt="logo" className="navbar-logo" />
        <div className="navbar-menu">
          <li className="navbar-menu-link">
            <a href="">About</a>
          </li>
          <li className="navbar-menu-link">
            <a href="">Resume</a>
          </li>
          <li className="navbar-menu-link">
            <a href="">Projects</a>
          </li>
        </div>
        <a href="" className="icon" onClick="">
          <i className="fas fa-bars"></i>
        </a>
      </div>
    );
  }
}

export default header;

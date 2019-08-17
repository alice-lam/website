import React, { Component } from "react";
import "./styles/_header.scss";
import Image from "./images/oldlogo.png";

class header extends Component {
  render() {
    return (
      <div className="navbar-container">
          <img src={Image} alt="logo" className="navbar-logo" />
          <h1 className="navbar-title"> A L I C E L A M . C O </h1>
        <button href="" className="menu-icon" onClick="">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    );
  }
}

export default header;

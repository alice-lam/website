import React, { Component } from "react";
import "./styles/_subheader.scss";

class subheader extends Component {
  render() {
    return (
      <div className="subheader-container">
        <div className="subheader-menu">
          <li className="subheader-menu-link">
            <a href="">About</a>
          </li>
          <li className="subheader-menu-link">
            <a href="">Resume</a>
          </li>
          <li className="subheader-menu-link">
            <a href="">Projects</a>
          </li>
        </div>
      </div>
    );
  }
}

export default subheader;

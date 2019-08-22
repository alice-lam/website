import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
// import "./styles/_subheader.scss";

class subheader extends Component {
  render() {
    return (
      <div className="subheader-container">
        <div className="subheader-menu">
          <li className="subheader-menu-link">
            <NavLink exact activeClassName="active" to="/" href="/">Home</NavLink>
          </li>
          <li className="subheader-menu-link">
            <NavLink exact activeClassName="active" to="/about" href="/about">About</NavLink>
          </li>
          <li className="subheader-menu-link">
            <NavLink exact activeClassName="active" to="/developer" href="/developer">Developer Portfolio</NavLink>
          </li>
          <li className="subheader-menu-link">
            <NavLink exact activeClassName="active" to="/treatsbyalice" href="/treatsbyalice">TreatsByAlice</NavLink>
          </li>
        </div>
      </div>
    );
  }
}

export default subheader;

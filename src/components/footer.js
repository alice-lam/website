import React, { Component } from "react";
import "./styles/_footer.scss";

class footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <ul className="footer-menu">
          <li className="footer-menu-link">
            <a href="mailto:alice94@sbcglobal.net"><i className="fas fa-envelope"></i><span>Email</span></a>
          </li>
          <li className="footer-menu-link">
            <a href="https://www.linkedin.com/in/ccalicelam/"><i className="fab fa-linkedin"></i><span>LinkedIn</span></a>
          </li>
          <li className="footer-menu-link">
            <a href="https://github.com/alice-lam"><i className="fab fa-github"></i><span>Github</span></a>
          </li>
          <li className="footer-menu-link">
            <a href="https://www.instagram.com/picsbyalice/"><i className="fab fa-instagram"></i><span>Instagram</span></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default footer;

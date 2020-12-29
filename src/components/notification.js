import React, { Component } from "react";
import "./styles/_notification.scss";

class notification extends Component {
  render() {
    return (
      <div className="resume-container">
        <a className="link-resume" href="../files/al_resume.pdf" target="_blank"><i className="fas fa-download"></i>To download full resume, click here.</a>
      </div>
    );
  }
}

export default notification;

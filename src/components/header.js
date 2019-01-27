import React, { Component } from 'react';
import "./styles/_header.scss";

class header extends Component {
  render() {
    return(
        <div className="navbar-container">
            <a className="navbar-logo">Alice Lam</a>
        </div>
    );

  }
}

export default header; 
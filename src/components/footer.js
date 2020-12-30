import React, { Component } from "react";
import "./styles/_footer.scss";

class footer extends Component {
  constructor(props){
    super(props);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }
  componentDidMount(){
    this.emailtext = document.getElementById("emailtext");
    this.buttonText = document.getElementById("buttontext");
    this.buttonIcon = document.body.querySelector("i.fa-envelope");
  }
  copyToClipboard(e) {
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains("copy-paste")||e.target.classList.contains("fa-envelope")||e.target.classList.contains("email-label")){
      this.emailtext.select();
      document.execCommand('copy');
      this.buttonIcon.classList.remove("fa-envelope");
      this.buttonIcon.classList.add("fa-clipboard");
      this.buttonText.innerHTML = "copied!";
      setTimeout(function(){ 
        document.getElementById("buttontext").innerHTML = "Email";
        var icon = document.body.querySelector("i.fa-clipboard");
        icon.classList.remove("fa-clipboard");
        icon.classList.add("fa-envelope");
      }, 1000);
    }
  }
  render() {
    return (
      <div className="footer-container">
        <ul className="footer-menu">
          <li className="footer-menu-link">
            <button className="copy-paste" onClick={this.copyToClipboard}><i className="fas fa-envelope"></i><span className="email-label" id="buttontext">Email</span></button>
            <textarea id="emailtext" rows="1" cols="25" defaultValue="alice94@sbcglobal.net" readOnly></textarea>
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

import React, { Component } from "react";
import "./styles/_header.scss";
import { NavLink } from 'react-router-dom';
import Image from "./images/oldlogo.png";

class header extends Component {
  constructor(props){
    super(props);
    this.expanded = false;
    this.handleMenu = this.handleMenu.bind(this);
  }
  componentDidMount(props){
    this.menu = document.body.querySelector("div.navbar-mobile");
  }
  handleMenu(e) {
    e.preventDefault();
    if(e.target.classList.contains("menu-icon") || e.target.classList.contains("fa-bars")){
      if(this.expanded){
        this.closeMenu();
      } else{
        this.openMenu();
      }
      this.expanded = !this.expanded;
    }
  }
  closeMenu(){
    this.menu.classList.remove("show");
  }
  openMenu(){
    this.menu.classList.add("show");
  }
  componentWillUnmount(props){
    this.closeMenu();
  }

  render() {
    return (
      <div className="navbar-container">
          <img src={Image} alt="logo" className="navbar-logo" />
          <h1 className="navbar-title"> A L I C E L A M . C O </h1>
        <button className="menu-icon" onClick={this.handleMenu}>
            <i className="fas fa-bars"></i>
        </button>
        <div className="navbar-mobile">
          <ul className="navbar-mobile-menu">
            <li className="navbar-mobile-menu-item">
              <NavLink exact activeClassName="active" to="/" href="/">Home</NavLink>
            </li>
            <li className="navbar-mobile-menu-item">
              <NavLink exact activeClassName="active" to="/developer" href="/developer">Developer Portfolio</NavLink>
            </li>
            <li className="navbar-mobile-menu-item">
              <NavLink exact activeClassName="active" to="/treatsbyalice" href="/treatsbyalice">TreatsByAlice</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default header;

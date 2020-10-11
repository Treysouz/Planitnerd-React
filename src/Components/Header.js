import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={require("../Assets/Icons/logo.png")} alt="Planitnerd"></img>
        <nav>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/">
            Features
          </Link>
          <Link className="navLink" to="/blog">
            Resources
          </Link>
          <Link className="navLink" to="/">
            Contact
          </Link>
        </nav>
      </header>
    );
  }
}

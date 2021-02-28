import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      mobileNav: false,
    };
  }
  componentDidMount() {
    window.onresize = this.checkMobile;
    this.checkMobile();
    document.getElementById("mainSection").addEventListener("click", ()=>{
      if(document.getElementById("mobileNavIcon")!== null){
        document.getElementById("mobileNavIcon").classList.remove("active");
        this.setState({
          mobileNav: false,
        })
      }
     
    })
  }
  checkMobile = () => {
    if (window.innerWidth <= 800) {
      this.setState({
        isMobile: true,
      });
    } else {
      this.setState({
        isMobile: false,
      });
    }
  };
  toggleMobileNav = () => {
    this.setState({
      mobileNav: !this.state.mobileNav,
    });
    if (!this.state.mobileNav) {
      document.getElementById("mobileNavIcon").classList.add("active");
    } else {
      document.getElementById("mobileNavIcon").classList.remove("active");
    }
  };
  render() {
    return (
      <header id="navHeader">
        {/* <img className="badge"
        src={require("../Assets/Icons/google-play-badge.png")}>
        </img> */}
        <img
          className="logo"
          src={require("../Assets/Icons/logo.png")}
          alt="Planitnerd"
        ></img>
        {this.state.isMobile ? (
          <FontAwesomeIcon
            onClick={() => this.toggleMobileNav()}
            icon={faBars}
            className="mobileNavIcon"
            id="mobileNavIcon"
          ></FontAwesomeIcon>
        ) : null}
        {this.state.isMobile ? null : (
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

              <button>Early Access</button>
     
          </nav>
        )}
        {this.state.mobileNav ? (
          <nav className="navDrawer">
            <div className="mobileNav">
              {" "}
              <Link
                className="navLink"
                to="/"
                onClick={() => this.toggleMobileNav()}
              >
                Home
              </Link>
              <Link
                className="navLink"
                to="/"
                onClick={() => this.toggleMobileNav()}
              >
                Features
              </Link>
              <Link
                className="navLink"
                to="/blog"
                onClick={() => this.toggleMobileNav()}
              >
                Resources
              </Link>
              <Link
                className="navLink"
                to="/"
                onClick={() => this.toggleMobileNav()}
              >
                Contact
              </Link>
            </div>
            )
          </nav>
        ) : null}
      </header>
    );
  }
}

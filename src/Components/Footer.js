import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="topFooter">
          <h2>Love Planning Trips for Others?</h2>
          <p>Contact us to become a guide & get paid to create itineraries.</p>
        </div>
        <div className="bottomFooter">
          <div className="footerCallToActionContainer">
            <div className="callToAction">
              <input type="email" placeholder="Enter your email"></input>{" "}
              <button>Get early access</button>
            </div>
            <span className="errorMsg">Email is required</span>
          </div>
          <div className="footerLinksContainer">
            <div className="textLinks">
              <Link className="footerLink" to="/">
                Contact
              </Link>
              <Link className="footerLink" to="/">
                Terms
              </Link>
              <Link className="footerLink" to="/blog">
                Privacy
              </Link>
            </div>
            <div className="iconLinks">
              <Link className="footerLink" to="/">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </Link>
              <Link className="footerLink" to="/">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </Link>
              <Link className="footerLink" to="/blog">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </Link>
              <Link className="footerLink" to="/blog">
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </Link>
            </div>
          </div>
          <div className="copyrightContainer">
              <p>© Copyright 2020 | Planitnerd, Inc.</p>
              <br></br>
              <p>ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    );
  }
}

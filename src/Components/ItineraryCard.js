import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default class ArticleCard extends Component {
  render() {
    return (
      <figure className="itineraryCard">
        <img src={require("../Assets/Images/glob.png")} />
        <h2>Place</h2>
        <figcaption>
         
          <h3>By Angel Acosta</h3>
        
          <span>September 14, 2020</span>
        </figcaption>
      </figure>
    );
  }
}

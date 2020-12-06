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
        <img
          className="itineraryImg"
          src={require("../Assets/Images/glob.png")}
        />
        <h2 className="placeContainer">Place</h2>
        <h2 className="pointsContainer">100 Points</h2>
        <figcaption>
          <img></img>
          <h3>Angel Acosta</h3>
          <div className="datePostedContainer">
            <span>September 14, 2020</span>
            <span>1:48 AM</span>
          </div>
        </figcaption>
      </figure>
    );
  }
}

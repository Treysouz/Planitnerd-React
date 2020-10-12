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
      <figure className="articleCard">
        <img src={require("../Assets/Images/glob.png")} />
        <figcaption>
          <h2>Lorem ipsum dolor sit amet</h2>
          <h3>By Angel Acosta</h3>
          <h3>
            Scelerisque in dictum non consectetur. Donec pretium vulputate
            sapien nec sagittis. Ipsum dolor sit amet consectetur adipiscing
            elit pellentesque habitant.{" "}
          </h3>
          <span>September 14, 2020</span>
        </figcaption>
      </figure>
    );
  }
}

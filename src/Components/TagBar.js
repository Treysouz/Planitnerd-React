import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default class TagBar extends Component {
  render() {
    return (
      <div className="tagBar">
        <div className="tagsContainer">
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
        </div>
        <button>View All</button>
      </div>
    );
  }
}

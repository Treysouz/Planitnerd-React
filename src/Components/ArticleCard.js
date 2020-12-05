import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Article from "./Article";
export default class ArticleCard extends Component {
  constructor() {
    super();
    this.state = {
      moduleView: true,
    };
  }
  render() {
    return (
      <figure className="articleCard" onClick={()=>this.props.setArticle(this.props.title, this.props.description, this.props.date, this.props.image)}>
        <img src={this.props.image} />
        <figcaption>
          <h2>{this.props.title}</h2>
          <h3>By Angel Acosta</h3>
          <h3>{this.props.description}</h3>
          <span>{this.props.date}</span>
        </figcaption>
      </figure>
    );
  }
}

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default class Article extends Component {
  render() {
    return (
      <section className="moduleOverlay" >
        <FontAwesomeIcon className="exitBtn" icon={faTimes}  onClick={()=>this.props.toggleModule()}></FontAwesomeIcon>
        <div className="moduleBackground" onClick={()=>this.props.toggleModule()}></div>
        <div className="module">
          <div className="post-info">
            <h1>{this.props.title}</h1>
            <h2>By Angel Acosta</h2>
            <h3>{this.props.date}</h3>
            <img src={this.props.image}/>
          </div>
          <p>{this.props.description}</p>
        </div>
      </section>
    );
  }
}

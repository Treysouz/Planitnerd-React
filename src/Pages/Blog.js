import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TagBar from "../Components/TagBar";
import ArticleCard from "../Components/ArticleCard";
import ItineraryCard from "../Components/ItineraryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default class Blog extends Component {
  render() {
    return (
      <section id="mainSection">
        <div className="blogArea">
          
          <div className="newsContainer">
            <h1>
              <hr />
              <span>Updates</span>
              <hr />
            </h1>
            <TagBar></TagBar>
            <div className="updatePostsContainer">
            <ArticleCard></ArticleCard>
            </div>
            <button className="readMore">Read More</button>
          </div>
          <div className="newsContainer">
            <h1>
              <hr />
              <span>Itineraries</span>
              <hr />
            </h1>
            <TagBar></TagBar>
            <div className="updatePostsContainer">
            <ItineraryCard></ItineraryCard>
            </div>
            <button className="readMore">Read More</button>
          </div>
          <div className="newsContainer">
            <h1>
              <hr />
              <span style={{ whiteSpace: "nowrap" }}>Partner Offers</span>
              <hr />
            </h1>
            <TagBar></TagBar>
            <div className="updatePostsContainer">
     
            </div>
            <button className="readMore">Read More</button>
          </div>
        </div>
      </section>
    );
  }
}

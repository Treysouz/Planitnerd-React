import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TagBar from "../Components/TagBar";
import ArticleCard from "../Components/ArticleCard";
import Article from "../Components/Article";
import ItineraryCard from "../Components/ItineraryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
// const axios = require("axios").default;
import axios from "axios";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      articleData: null,
      itineraryData: null,
      moduleView: false,
      articleTitle: null,
      articleDate: null,
      articleImage: null,
      articleDesc: null,
    };
  }
  setArticle = (title, desc, date, image) => {
    this.setState({
      articleTitle: title,
      articleDate: date,
      articleDesc: desc,
      articleImage: image,
      moduleView: true,
    });
  };
  toggleModule = () => {
    this.setState({
      moduleView: !this.state.moduleView,
    });
  };
  componentDidMount() {
    axios
      .post("https://api.planitnerd.com/api/v1/user/authenticate", {
        email: "tremayne@planitnerd.com",
        password: "TSnerd123!!",
        userType: "Admin",
        loginType: "Email",
      })
      .then((response) => {
        // handle success
        axios({
          method: "GET",
          url: "https://api.planitnerd.com/api/v1/resources/all-resources/1",
          headers: {
            accesstoken: response.data.token,
          },
        }).then((response) => {
          this.setState({
            articleData: response.data.results.docs,
          });
        });
        axios({
          method: "GET",
          url: "https://api.planitnerd.com/api/v1/trip/all-posted-trips/1",
          headers: {
            accesstoken: response.data.token,
          },
        }).then((response) => {
          console.log(response);
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  componentDidUpdate() {
    this.state.moduleView
      ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
      : (document.getElementsByTagName("body")[0].style.overflow = "auto");
  }
  render() {
    return (
      <section id="mainSection">
        {this.state.moduleView ? (
          <Article
            toggleModule={this.toggleModule}
            title={this.state.articleTitle}
            description={this.state.articleDesc}
            image={this.state.articleImage}
            date={this.state.articleDate}
          ></Article>
        ) : null}
        <div className="blogArea">
          <div className="newsContainer">
            <h1>
              <hr />
              <span>Updates</span>
              <hr />
            </h1>
            {/* <TagBar></TagBar> */}
            <div className="updatePostsContainer">
              {this.state.articleData
                ? this.state.articleData.map((value, index) => {
                    var dateCreated = new Date(value.createdAt);
                    var months = [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ];
                    var dateFormatted =
                      months[dateCreated.getMonth()] +
                      " " +
                      dateCreated.getDate() +
                      ", " +
                      dateCreated.getFullYear();
                    return (
                      <ArticleCard
                        setArticle={this.setArticle}
                        key={value._id}
                        title={value.title}
                        description={value.description}
                        image={value.attachment.location}
                        date={dateFormatted}
                      ></ArticleCard>
                    );
                  })
                : null}
            </div>
            <button className="readMore">Read More</button>
          </div>
          <div className="newsContainer">
            <h1>
              <hr />
              <span>Itineraries</span>
              <hr />
            </h1>
            {/* <TagBar></TagBar> */}
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
            {/* <TagBar></TagBar> */}
            <div className="updatePostsContainer"></div>
            <button className="readMore">Read More</button>
          </div>
        </div>
      </section>
    );
  }
}

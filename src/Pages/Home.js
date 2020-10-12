import React, { Component } from "react";

export default class Home extends Component {
  inViewport = (elem) => {
    var bounding = elem.getBoundingClientRect();
    // console.log(bounding);
    // console.log( bounding.bottom <=
    //   (window.innerHeight || document.documentElement.clientHeight));
    // console.log( bounding.right <=
    //   (window.innerWidth || document.documentElement.clientWidth));
    return (
      bounding.top >= -(window.innerHeight/4)  &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight+(window.innerHeight/4) || document.documentElement.clientHeight + (document.documentElement.clientHeight/4)) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      // console.log(this.inViewport(document.querySelectorAll(".featureContainer")[0]));
      document.querySelectorAll(".featureContainer").forEach((el) => {
        if (
          this.inViewport(el) &&
          !el.children[0].classList.contains("fadeInRight") &&
          !el.children[1].classList.contains("fadeInLeft")
        ) {
          el.children[0].classList.add("fadeInRight");
          el.children[1].classList.add("fadeInLeft");
        }
      });
    });
    window.addEventListener("load", () => {
      // console.log(this.inViewport(document.querySelectorAll(".featureContainer")[0]));
      document.querySelectorAll(".featureContainer").forEach((el) => {
        if (
          this.inViewport(el) &&
          !el.children[0].classList.contains("fadeInRight") &&
          !el.children[1].classList.contains("fadeInLeft")
        ) {
          el.children[0].classList.add("fadeInRight");
          el.children[1].classList.add("fadeInLeft");
        }
      });
    });
  }

  render() {
    return (
      <section id="mainSection"> 
        <div className="banner">
          <div className="actionCallContainer fadeInUp">
            <h1>Planning Trips With Points Has Never Been Easier</h1>
            <p>
              Collaborate & build your own itineraries, get all your travel
              questions answered, & learn how to travel for free.
            </p>
            <div className="callToAction">
              {" "}
              <input type="email" placeholder="Enter your email"></input>{" "}
              <button>Get early access</button>
              <span className="errorMsg">Email is required</span>
            </div>
    
          </div>
          <img
            className="growIn"
            src={require("../Assets/Images/glob.png")}
            alt="Globe"
          ></img>
        </div>
        <div className="featureContainer">
          <img className="phoneGif"
            src={require("../Assets/Images/cellupdated.gif")}
            alt="Points Flow"
          ></img>
          <div className="featureInfo">
            <h2>Got Points? Get Excited for Your Upcoming Trip</h2>
            <p>
              While looking to see how you can spend your credit card travel points on your next trip, 
              collaborate with your friends to build awesome itenaries & 
              get everything you need to plan at your fingertips.
            </p>
          </div>
        </div>
        <div className="featureContainer">
          <div className="featureInfo">
            <h2>Creating A Community of Travellers</h2>
            <p>
              There are too many unreliable sources online when you’re planning
              your trips. Get all your travel questions answered in one place
              from trusted resources- your friends!
            </p>
          </div>
          <img
            src={require("../Assets/Images/section2.png")}
            alt="Community Flow"
          ></img>
        </div>
        <div className="featureContainer">
          <img
            src={require("../Assets/Images/section3.png")}
            alt="Resources Flow"
          ></img>
          <div className="featureInfo">
            <h2>Utilize Offers to Travel for Frees</h2>
            <p>
            Leveraging your hard earned points and miles is confusing. Learn tips and tricks on how to 
            travel the world for free with your points through our curated 
            resources and other partner offers.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

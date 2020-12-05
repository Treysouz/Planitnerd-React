import React, { Component } from "react";
import "./CSS/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Footer from "./Components/Footer";
import $ from "jquery";



export default class App extends Component {
  componentDidMount() {
    // $.ajax({
    //   url: "https://api.planitnerd.com/api/v1/user/authenticate",
    //   method: "POST",
    //   data: {email: "tremayne@planitnerd.com", password: "TSnerd123!!", userType: "Admin", loginType: "Email"},
    //   xhrFields: {
    //     withCredentials: true,
    //   },
    //   headers: {
    //     "Access-Control-Allow-Origin": true,
    //     "Access-Control-Allow-Credentials": true
    //   },
    //   success: function (results) {
    //    console.log(results);
    //   },
    // })
    
  }
  render() {
    return (
      <Router>
        <main>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
          </Switch>
          <Footer></Footer>
        </main>
      </Router>
    );
  }
}

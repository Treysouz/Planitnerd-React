import React, { Component } from "react";
import "./CSS/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Footer from "./Components/Footer";

export default class App extends Component {

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
              {/* <Blog /> */}
            </Route>
          </Switch>
          <Footer></Footer>
        </main>
      </Router>
    );
  }
}

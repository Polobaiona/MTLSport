import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import MainForum from "./MainForum.jsx";
import Myaccount from "./Myaccount.jsx";
import UserDetails from "./UserDetails.jsx";
import Basketball from "./Basketball.jsx";
import Hockey from "./Hockey.jsx";
import Soccer from "./Soccer.jsx";
import RockClimbing from "./RockClimbing.jsx";
import Tennis from "./Tennis.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

class UnconnectedApp extends Component {
  componentDidMount = () => {
    fetch("http://localhost:4000/thread")
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        console.log(body);
        this.props.dispatch({
          type: "get-threads",
          threads: body.results
        });
      });
    fetch("http://localhost:4000/check-login", { credentials: "include" })
      .then(response => response.text())
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          this.props.dispatch({ type: "login-success" });
          this.props.history.push("/");
        }
      });
  };
  renderRoot = () => {
    return (
      <div>
        <div className="description">Image placeholder</div>
        <div className="description">Description</div>
        <MainForum />
        <div>Buy/Sell</div>
        <div>Talk Sport</div>
      </div>
    );
  };

  renderAccount = () => {
    return (
      <div>
        <Myaccount />
      </div>
    );
  };

  renderUserDetails = () => {
    return (
      <div>
        <UserDetails />
      </div>
    );
  };

  both = () => {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  };

  renderSport = routerData => {
    if (routerData.match.params.sport === "Basketball")
      return (
        <div>
          <Basketball />
        </div>
      );
    if (routerData.match.params.sport === "Hockey")
      return (
        <div>
          <Hockey />
        </div>
      );
    if (routerData.match.params.sport === "RockClimbing")
      return (
        <div>
          <RockClimbing />
        </div>
      );
    if (routerData.match.params.sport === "Soccer")
      return (
        <div>
          <Soccer />
        </div>
      );
    if (routerData.match.params.sport === "Tennis")
      return (
        <div>
          <Tennis />
        </div>
      );
    if (routerData.match.params.sport === "Misc")
      return (
        <div>
          <Misc />
        </div>
      );
  };
  renderThread = routerData => {
    if (routerData.match.params.id === "1") {
      return <div>test replies</div>;
    }
    //<Thread props={this.obj} />
    if (routerData.match.params.id === "3") {
      return <div>test replies 2</div>;
    }
  };
  render = () => {
    return (
      <div>
        <div>
          <TopBar />
          <Route exact={true} path="/both" render={this.both} />
        </div>
        <div>
          <Route exact={true} path="/" render={this.renderRoot} />
          <Route exact={true} path="/myAccount" render={this.renderAccount} />
          <Route
            exact={true}
            path="/UserDetails"
            render={this.renderUserDetails}
          />
          <Route exact={true} path="/:sport" render={this.renderSport} />
          <Route exact={true} path="/:sport/:id" render={this.renderThread} />
        </div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { threads: state.threads };
};
let App = connect(mapStateToProps)(UnconnectedApp);
export default withRouter(App);

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
import Thread from "./Thread.jsx";
import Misc from "./Misc.jsx";
import NewThread from "./NewThread.jsx";

class UnconnectedApp extends Component {
  componentDidMount = () => {
    fetch("http://localhost:4000/thread")
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        this.props.dispatch({
          type: "get-threads",
          threads: body.results
        });
      });
    // fetch("http://localhost:4000/check-login", { credentials: "include" })
    //   .then(x => x.text())
    //   .then(responseBody => {
    //     let body = JSON.parse(responseBody);
    //     if (body.success) {
    //       this.props.dispatch({ type: "login-success" });
    //       this.props.history.push("/");
    //     }
    //   });
  };
  renderRoot = () => {
    return (
      <div>
        <div className="description flex2">
          <img
            className="imageResize"
            src="https://www.theflagshop.co.nz/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/m/o/montreal_2.gif"
          />
          <div className="description">
            MTLSport is a site dedicated to finding friendly local sports games
          </div>
        </div>

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
    let path = routerData.match.params.id;

    return <Thread path={path} />;
  };
  showSubmission = () => {
    this.props.dispatch({
      type: "show-form",
      showAddThread: !this.props.showAddThread
    });
  };
  render = () => {
    return (
      <div>
        <div>
          <TopBar />
          <Route exact={true} path="/both" render={this.both} />
        </div>
        <div>
          {this.props.loggedIn && (
            <button onClick={this.showSubmission}>Add new thread</button>
          )}
          {this.props.showAddThread && <NewThread />}
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
  return {
    threads: state.threads,
    showAddThread: state.showAddThread,
    loggedIn: state.loggedIn
  };
};
let App = connect(mapStateToProps)(UnconnectedApp);
export default withRouter(App);

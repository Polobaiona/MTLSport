import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import MainForum from "./MainForum.jsx";
import Account from "./Account.jsx";
import UserDetails from "./UserDetails.jsx";
import Basketball from "./Basketball.jsx";
import Hockey from "./Hockey.jsx";
import Soccer from "./Soccer.jsx";
import RockClimbing from "./RockClimbing.jsx";
import Tennis from "./Tennis.jsx";

class UnconnectedApp extends Component {
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
        <Account />
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

  renderBasketball = () => {
    return (
      <div>
        <Basketball />
      </div>
    );
  };

  renderHockey = () => {
    return (
      <div>
        <Hockey />
      </div>
    );
  };

  renderRockClimbing = () => {
    return (
      <div>
        <RockClimbing />
      </div>
    );
  };

  renderSoccer = () => {
    return (
      <div>
        <Soccer />
      </div>
    );
  };

  renderTennis = () => {
    return (
      <div>
        <Tennis />
      </div>
    );
  };

  renderMisc = () => {
    return (
      <div>
        <Misc />
      </div>
    );
  };
  login = () => {
    return <Login />;
  };
  signup = () => {
    return <Signup />;
  };
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <TopBar />
          <Route exact={true} path="/Login" render={this.login} />
          <Route exact={true} path="/Signup" render={this.signup} />
        </div>
        <div>
          <Route exact={true} path="/" render={this.renderRoot} />
          <Route exact={true} path="/Account" render={this.renderAccount} />
          <Route
            exact={true}
            path="/UserDetails"
            render={this.renderUserDetails}
          />
          <Route
            exact={true}
            path="/Basketball"
            render={this.renderBasketball}
          />
          <Route exact={true} path="/Hockey" render={this.renderHockey} />
          <Route
            exact={true}
            path="/RockClimbing"
            render={this.renderRockClimbing}
          />
          <Route exact={true} path="/Soccer" render={this.renderSoccer} />
          <Route exact={true} path="/Tennis" render={this.renderTennis} />
          <Route exact={true} path="/Misc" render={this.renderMisc} />
        </div>
      </BrowserRouter>
    );
  };
}

let App = connect()(UnconnectedApp);
export default App;

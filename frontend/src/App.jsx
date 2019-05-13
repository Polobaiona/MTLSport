import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import MainForum from "./MainForum.jsx";
import Account from "./Account.jsx";
import UserDetails from "./UserDetails.jsx";

class UnconnectedApp extends Component {
  renderRoot = () => {
    return (
      <div>
        <MainForum />
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

  render = () => {
    return (
      <BrowserRouter>
        <div>
          <TopBar />
        </div>
        <div>
          <Route exact={true} path="/" render={this.renderRoot} />
          <Route exact={true} path="/Account" render={this.renderAccount} />
          <Route
            exact={true}
            path="/UserDetails"
            render={this.renderUserDetails}
          />
        </div>
      </BrowserRouter>
    );
  };
}

let App = connect()(UnconnectedApp);
export default App;

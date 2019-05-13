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

  renderBasketball = () => {
    return <div>Basketball subforum</div>;
  };

  renderHockey = () => {
    return <div>Hockey subforum</div>;
  };

  renderRockClimbing = () => {
    return <div>Rock Climbing subforum</div>;
  };

  renderSoccer = () => {
    return <div>Soccer subforum</div>;
  };

  renderTennis = () => {
    return <div>Tennis subforum</div>;
  };

  renderMisc = () => {
    return <div>Miscallenous sports subforum</div>;
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

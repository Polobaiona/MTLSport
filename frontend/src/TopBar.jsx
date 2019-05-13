import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

class UnconnectedTopBar extends Component {
  render = () => {
    if (!this.props.loggedIn) {
      return (
        <div>
          <div className="flex">
            <div>
              <Link to="/">MTLSport</Link>
            </div>{" "}
            <div>
              <Link to="/form">Login/Signup</Link>
            </div>{" "}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flex">
            <div>
              <Link to="/">MTLSport</Link>
            </div>{" "}
            <div>
              <Link to="/myAccount">My account</Link>
            </div>{" "}
          </div>
        </div>
      );
    }
  };
}

let TopBar = connect()(UnconnectedTopBar);

export default TopBar;

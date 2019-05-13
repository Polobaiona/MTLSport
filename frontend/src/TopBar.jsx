import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

class UnconnectedTopBar extends Component {
  render = () => {
    return (
      <div>
        <div className="flex">
          <div>
            <Link to="/">MTLSport</Link>
          </div>{" "}
          <div>
            <Link to="/myAccount">Login/Signup</Link>
          </div>{" "}
        </div>
      </div>
    );
  };
}

let TopBar = connect()(UnconnectedTopBar);

export default TopBar;

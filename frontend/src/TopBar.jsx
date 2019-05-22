import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

class UnconnectedTopBar extends Component {
  render = () => {
    if (!this.props.loggedIn) {
      return (
        <div>
          <div className="top-bar flex">
            <div>
              <Link to="/">
                <span className="proxima-nova-font bigger-font white-font">
                  MTLSport
                </span>
              </Link>
            </div>
            <div className="proxima-nova-font bigger-font white-font">
              <Link to="/both">Signup/login</Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flex top-bar">
            <div>
              <Link to="/">
                {" "}
                <span className="proxima-nova-font bigger-font white-font">
                  MTLSport
                </span>
              </Link>
            </div>
            <div className="form">
              <Link to="/myAccount">
                <span className="proxima-nova-font white-font">My Account</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  };
}

let mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

let TopBar = connect(mapStateToProps)(UnconnectedTopBar);

export default TopBar;

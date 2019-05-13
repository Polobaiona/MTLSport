import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedTopBar extends Component {
  render = () => {
    return (
      <div>
        <div className="flex">
          <div>MTLSport</div> <div>Login/Signup/MyAccount</div>{" "}
        </div>
      </div>
    );
  };
}

let TopBar = connect()(UnconnectedTopBar);

export default TopBar;

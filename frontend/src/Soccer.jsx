import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedSoccer extends Component {
  render = () => {
    return <div>Soccer subforum</div>;
  };
}

let Soccer = connect()(UnconnectedSoccer);
export default Soccer;

import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedHockey extends Component {
  render = () => {
    return <div>Hockey subforum</div>;
  };
}

let Hockey = connect()(UnconnectedHockey);

export default Hockey;

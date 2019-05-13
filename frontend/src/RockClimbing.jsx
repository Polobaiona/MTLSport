import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedRockClimbing extends Component {
  render = () => {
    return <div>Rock Climbing subforum</div>;
  };
}

let RockClimbing = connect()(UnconnectedRockClimbing);

export default RockClimbing;

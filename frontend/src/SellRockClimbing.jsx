import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellRockClimbing extends Component {
  render = () => {
    return (
      <div>
        <div>Rock Climbing items for sale</div>
        <div>link to each thread</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let SellRockClimbing = connect(mapStateToProps)(UnconnectedSellRockClimbing);

export default SellRockClimbing;

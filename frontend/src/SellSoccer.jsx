import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellSoccer extends Component {
  render = () => {
    return (
      <div>
        <div>Soccer items for sale</div>
        <div>link to each thread</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let SellSoccer = connect(mapStateToProps)(UnconnectedSellSoccer);

export default SellSoccer;

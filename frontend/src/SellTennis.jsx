import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellTennis extends Component {
  render = () => {
    return (
      <div>
        <div>Tennis items for sale</div>
        <div>link to each thread</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let SellTennis = connect(mapStateToProps)(UnconnectedSellTennis);

export default SellTennis;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellBasketball extends Component {
  render = () => {
    return (
      <div>
        <div>Basketball items for sale</div>
        <div>link to each thread</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let SellBasketball = connect(mapStateToProps)(UnconnectedSellBasketball);

export default SellBasketball;

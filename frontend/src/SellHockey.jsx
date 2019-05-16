import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellHockey extends Component {
  render = () => {
    return (
      <div>
        <div>Hockey items for sale</div>
        <div>link to each thread</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let SellHockey = connect(mapStateToProps)(UnconnectedSellHockey);

export default SellHockey;

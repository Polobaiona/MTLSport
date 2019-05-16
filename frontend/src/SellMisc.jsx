import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellMisc extends Component {
  render = () => {
    return (
      <div>
        <div>Misc items for sale</div>
        <div>link to each thread</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let SellMisc = connect(mapStateToProps)(UnconnectedSellMisc);

export default SellMisc;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellTennis extends Component {
  render = () => {
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "sellTennis";
      })
      .reverse();

    let titles = messages.map(ele => {
      let linkTo = "/SellTennis/" + ele._id;

      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle}</Link>
        </div>
      );
    });

    return (
      <div>
        <div>{titles}</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let SellTennis = connect(mapStateToProps)(UnconnectedSellTennis);

export default SellTennis;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellRockClimbing extends Component {
  render = () => {
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "sellRockClimbing";
      })
      .reverse();

    let titles = messages.map(ele => {
      let linkTo = "/SellRockClimbing/" + ele._id;

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

let SellRockClimbing = connect(mapStateToProps)(UnconnectedSellRockClimbing);

export default SellRockClimbing;

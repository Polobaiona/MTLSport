import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellMisc extends Component {
  render = () => {
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "sellMisc";
      })
      .reverse();

    let titles = messages.map(ele => {
      let linkTo = "/SellMisc/" + ele._id;

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

let SellMisc = connect(mapStateToProps)(UnconnectedSellMisc);

export default SellMisc;

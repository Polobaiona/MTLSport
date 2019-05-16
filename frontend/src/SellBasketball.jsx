import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SellModal from "./SellModal.jsx";
class UnconnectedSellBasketball extends Component {
  render = () => {
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "sellBasketball";
      })
      .reverse();

    let titles = messages.map(ele => {
      let linkTo = "/SellBasketball/" + ele._id;
      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle}</Link>
        </div>
      );
    });

    return (
      <div>
        <div>{this.props.loggedIn && <SellModal />}</div>
        <div>{titles}</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads, loggedIn: state.loggedIn };
};

let SellBasketball = connect(mapStateToProps)(UnconnectedSellBasketball);

export default SellBasketball;

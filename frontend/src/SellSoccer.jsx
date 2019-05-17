import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SellModal from "./SellModal.jsx";
class UnconnectedSellSoccer extends Component {
  render = () => {
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "sellSoccer";
      })
      .reverse();
    let titles = messages.map(ele => {
      let linkTo = "/SellSoccer/" + ele._id;
      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle}</Link>| Location: {ele.location}
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

let SellSoccer = connect(mapStateToProps)(UnconnectedSellSoccer);

export default SellSoccer;

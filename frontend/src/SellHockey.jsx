import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SellModal from "./SellModal.jsx";
class UnconnectedSellHockey extends Component {
  render = () => {
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "sellHockey";
      })
      .reverse();

    let titles = messages.map(ele => {
      let linkTo = "/SellHockey/" + ele._id;

      return (
        <div className="thread">
          <Link to={linkTo}>{ele.threadTitle}</Link> | Location: {ele.location}
        </div>
      );
    });
    return (
      <div>
        <img
          className="thread-img"
          src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VDOJV13Oeijqkbkz5/ice-hockey-the-game-of-regional-amateur-teams_sa74_cpx__F0000.png"
        />
        <h2 className="thread-title">Sell hockey equipment</h2>
        <div className="all-threads">
          {this.props.loggedIn && <SellModal />}
          <div>{titles}</div>
        </div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads, loggedIn: state.loggedIn };
};

let SellHockey = connect(mapStateToProps)(UnconnectedSellHockey);

export default SellHockey;

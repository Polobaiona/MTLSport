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
        <div className="thread">
          <Link to={linkTo}>{ele.threadTitle}</Link>| Location: {ele.location}
        </div>
      );
    });
    return (
      <div>
        <img
          className="thread-img"
          src="https://bloximages.chicago2.vip.townnews.com/emissourian.com/content/tncms/assets/v3/editorial/d/1a/d1acf7a6-070d-11e6-9014-4baa087a48e1/5717a367d8c80.preview.jpg"
        />
        <h2 className="thread-title">Sell soccer equipment</h2>
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

let SellSoccer = connect(mapStateToProps)(UnconnectedSellSoccer);

export default SellSoccer;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SellModal from "./SellModal.jsx";
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
        <div className="thread">
          <Link to={linkTo}>{ele.threadTitle}</Link>| Location: {ele.location}
        </div>
      );
    });

    return (
      <div>
        <img
          height="580px"
          width="1260px"
          src="http://gamerlimit.com/wp-content/uploads/2016/04/original.jpg"
        />
        <h2 className="thread-title">Sell miscellaneous equipment</h2>
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

let SellMisc = connect(mapStateToProps)(UnconnectedSellMisc);

export default SellMisc;

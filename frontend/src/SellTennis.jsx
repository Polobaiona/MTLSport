import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SellModal from "./SellModal.jsx";
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
          <Link className="thread" to={linkTo}>
            {ele.threadTitle}
          </Link>
          | Location: {ele.location}
        </div>
      );
    });

    return (
      <div>
        <img
          height="600px"
          width="1260px"
          src="https://media.timeout.com/images/102789069/image.jpg"
        />
        <h3 className="thread-title">Sell tennis equipment</h3>
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

let SellTennis = connect(mapStateToProps)(UnconnectedSellTennis);

export default SellTennis;

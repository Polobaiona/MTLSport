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
            {ele.threadTitle} | Location: {ele.location}
          </Link>
        </div>
      );
    });

    if (titles.length === 0) {
      return (
        <div>
          <img
            className="thread-img"
            src="https://media.timeout.com/images/102789069/image.jpg"
          />
          <h2 className="thread-title">Tennis Equipment</h2>
          <div className="all-threads">
            <div className="button-move">
              {this.props.loggedIn && <SellModal />}
            </div>
            <div className="thread-title-display no-games-message">
              No one is selling tennis equipment.
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <img
          className="thread-img"
          src="https://media.timeout.com/images/102789069/image.jpg"
        />
        <h3 className="thread-title">Tennis Equipment</h3>
        <div className="all-threads">
          <div className="button-move">
            {this.props.loggedIn && <SellModal />}
          </div>
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

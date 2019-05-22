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
        <div>
          <Link className="threadTitle" to={linkTo}>
            <div>
              <div>{ele.threadTitle} </div>
              <div className="titleofthread" style={{ display: "block" }}>
                Location: {ele.location}
              </div>
            </div>
          </Link>
        </div>
      );
    });

    if (titles.length === 0) {
      return (
        <div>
          <img
            className="thread-img"
            src="http://gamerlimit.com/wp-content/uploads/2016/04/original.jpg"
          />
          <h2 className="thread-title">Miscellaneous Equipment</h2>
          <div className="all-threads">
            <div className="button-move">
              {this.props.loggedIn && <SellModal />}
            </div>
            <div className="thread-title-display no-games-message">
              No one is selling equipment in your area.
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <img
          className="thread-img"
          src="http://gamerlimit.com/wp-content/uploads/2016/04/original.jpg"
        />
        <h2 className="thread-title">Miscellaneous Equipment</h2>
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

let SellMisc = connect(mapStateToProps)(UnconnectedSellMisc);

export default SellMisc;

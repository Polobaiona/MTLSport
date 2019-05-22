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
            src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VDOJV13Oeijqkbkz5/ice-hockey-the-game-of-regional-amateur-teams_sa74_cpx__F0000.png"
          />
          <h2 className="thread-title">Hockey Equipment</h2>
          <div className="all-threads">
            <div className="button-move">
              {this.props.loggedIn && <SellModal />}
            </div>
            <div className="thread-title-display no-games-message">
              No one is selling Hockey equipment.
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <img
          className="thread-img"
          src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VDOJV13Oeijqkbkz5/ice-hockey-the-game-of-regional-amateur-teams_sa74_cpx__F0000.png"
        />
        <h2 className="thread-title">Hockey Equipment</h2>
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

let SellHockey = connect(mapStateToProps)(UnconnectedSellHockey);

export default SellHockey;

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
            src="https://bloximages.chicago2.vip.townnews.com/emissourian.com/content/tncms/assets/v3/editorial/d/1a/d1acf7a6-070d-11e6-9014-4baa087a48e1/5717a367d8c80.preview.jpg"
          />
          <h2 className="thread-title">Soccer Equipment</h2>
          <div className="all-threads">
            <div className="button-move">
              {this.props.loggedIn && <SellModal />}
            </div>
            <div className="thread-title-display no-games-message">
              No one is selling soccer equipment.
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <img
          className="thread-img"
          src="https://bloximages.chicago2.vip.townnews.com/emissourian.com/content/tncms/assets/v3/editorial/d/1a/d1acf7a6-070d-11e6-9014-4baa087a48e1/5717a367d8c80.preview.jpg"
        />
        <h2 className="thread-title">Soccer Equipment</h2>
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

let SellSoccer = connect(mapStateToProps)(UnconnectedSellSoccer);

export default SellSoccer;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SellModal from "./SellModal.jsx";
class UnconnectedSellRockClimbing extends Component {
  render = () => {
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "sellRockClimbing";
      })
      .reverse();

    let titles = messages.map(ele => {
      let linkTo = "/SellRockClimbing/" + ele._id;

      return (
        <div className="thread">
          <Link to={linkTo}>{ele.threadTitle}</Link> | Location: {ele.location}
        </div>
      );
    });

    return (
      <div>
        <img
          height="500px"
          width="100%"
          src="https://mec.imgix.net/medias/sys_master/images/images/h0b/hb5/9001026158622/18-CM-61-Diversity-Explore-Hero-5x2-Climbing.jpg?w=1100&h=441&auto=format&q=30&bg=FFF"
        />
        <h2 className="thread-title">Sell rock climbing equipment</h2>
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

let SellRockClimbing = connect(mapStateToProps)(UnconnectedSellRockClimbing);

export default SellRockClimbing;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class UnconnectedSellForum extends Component {
  render = () => {
    return (
      <div className="findSportBar">
        <span>Find an Item For Sale</span>
        <span>
          <span className="mainPageLinks">
            <Link to="/SellBasketball">Basketball </Link>
          </span>
          <span className="mainPageLinks">
            <Link to="/SellHockey">Hockey </Link>
          </span>
          <span className="mainPageLinks">
            <Link to="/SellRockClimbing">Rock Climbing </Link>
          </span>
          <span className="mainPageLinks">
            <Link to="/SellSoccer">Soccer </Link>
          </span>
          <span className="mainPageLinks">
            <Link to="/SellTennis">Tennis </Link>
          </span>
          <span className="mainPageLinks">
            <Link to="/SellMisc">Misc. </Link>
          </span>
        </span>
      </div>
    );
  };
}

let SellForum = connect()(UnconnectedSellForum);

export default SellForum;

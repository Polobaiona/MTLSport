import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellForum extends Component {
  render = () => {
    return (
      <div>
        <div>Find an item for sale</div>
        <ul>
          <li>
            <Link to="/SellBasketball">Basketball equipment</Link>
          </li>
          <li>
            <Link to="/SellHockey">Hockey equipment</Link>
          </li>
          <li>
            <Link to="/SellRockClimbing">Rock Climbing equipment</Link>
          </li>
          <li>
            <Link to="/SellSoccer">Soccer equipment</Link>
          </li>
          <li>
            <Link to="/SellTennis">Tennis equipment</Link>
          </li>
          <li>
            <Link to="/SellMisc">Misc equipment</Link>
          </li>
        </ul>
      </div>
    );
  };
}

let SellForum = connect()(UnconnectedSellForum);

export default SellForum;

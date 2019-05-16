import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedSellForum extends Component {
  render = () => {
    return (
      <div>
        <div>Find an item for sale</div>
        <ul>
          <li>link to basketball equipment</li>
          <li>link to hockey equipment</li>
          <li>link to rock climbing equipment</li>
          <li>link to soccer equipment</li>
          <li>link to tennis equipment</li>
          <li>link to misc equipment</li>
        </ul>
      </div>
    );
  };
}

let SellForum = connect()(UnconnectedSellForum);

export default SellForum;

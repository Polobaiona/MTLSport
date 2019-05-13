import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedMainForum extends Component {
  render = () => {
    return (
      <div>
        <div>Choose a Sport</div>
        <ul>
          <li>
            <Link to="/Basketball">Basketball</Link>
          </li>
          <li>
            <Link to="/Hockey">Hockey</Link>
          </li>
          <li>
            <Link to="/RockClimbing">Rock Climbing</Link>
          </li>
          <li>
            <Link to="/Soccer">Soccer</Link>
          </li>
          <li>
            <Link to="/Tennis">Tennis</Link>
          </li>
          <li>
            <Link to="/Misc">Misc.</Link>
          </li>
        </ul>
      </div>
    );
  };
}

let MainForum = connect()(UnconnectedMainForum);

export default MainForum;

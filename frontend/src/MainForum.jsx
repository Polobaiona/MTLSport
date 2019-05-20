import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedMainForum extends Component {
  render = () => {
    return (
      <div className="findSportBar">
        <span>Choose A Sport</span>
        <span className="mainPageLinks">
          <Link to="/Basketball">Basketball</Link>
        </span>
        <span className="mainPageLinks">
          <Link to="/Hockey">Hockey</Link>
        </span>
        <span className="mainPageLinks">
          <Link to="/RockClimbing">Rock Climbing</Link>
        </span>
        <span className="mainPageLinks">
          <Link to="/Soccer">Soccer</Link>
        </span>
        <span className="mainPageLinks">
          <Link to="/Tennis">Tennis</Link>
        </span>
        <span className="mainPageLinks">
          <Link to="/Misc">Misc.</Link>
        </span>
      </div>
    );
  };
}

let MainForum = connect()(UnconnectedMainForum);

export default MainForum;

import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedMainForum extends Component {
  render = () => {
    return (
      <div>
        <div>Choose a Sport</div>
        <ul>
          <li>Basketball</li>
          <li>Hockey</li>
          <li>Rock Climbing</li>
          <li>Soccer</li>
          <li>Tennis</li>
          <li>Misc.</li>
        </ul>
      </div>
    );
  };
}

let MainForum = connect()(UnconnectedMainForum);

export default MainForum;

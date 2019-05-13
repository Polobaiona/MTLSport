import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedMainForum extends Component {
  render = () => {
    return (
      <div>
        <div>This is where the main forum would be</div>
      </div>
    );
  };
}

let MainForum = connect()(UnconnectedMainForum);

export default MainForum;

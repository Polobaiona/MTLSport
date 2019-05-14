import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedThread extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return <div>test</div>;
  };
}

let mapStateToProps = state => {
  return { thread: state.threads };
};

let Thread = connect(mapStateToProps)(UnconnectedThread);

export default Thread;

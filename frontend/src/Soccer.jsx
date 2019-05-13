import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedSoccer extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log(this.props.thread);
    let messages = this.props.thread.filter(ele => {
      return ele.category === "soccer";
    });

    let message = messages.map(ele => {
      return ele.msg;
    });

    let user = messages.map(ele => {
      return ele.username;
    });

    return (
      <div>
        <div>{message}</div>
        <div>{user}</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { thread: state.threads };
};

let Soccer = connect(mapStateToProps)(UnconnectedSoccer);
export default Soccer;

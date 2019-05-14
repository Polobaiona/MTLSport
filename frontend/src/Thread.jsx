import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedThread extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    console.log("threads: " + this.props.threads);
    let replies = this.props.threads.filter(ele => {
      return ele._id === this.props;
    });

    console.log("replies: " + replies);

    //let replies = threads.map(ele => {});

    return <div>test</div>;
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let Thread = connect(mapStateToProps)(UnconnectedThread);

export default Thread;

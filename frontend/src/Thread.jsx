import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedThread extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    let path = this.props.path;
    console.log(this.props.threads);
    let thread = this.props.threads.filter(ele => {
      console.log("comparing", ele._id, path);
      return ele._id === path;
    });
    console.log("thread", thread);
    let replies2 = thread[0].replies.map(ele => {
      console.log(ele.user, ele.msg);
      return (
        <div>
          {ele.user} | {ele.msg}
        </div>
      );
    });
    console.log("replies 2: ", replies2);
    // let replies2 = replies.map(ele => {
    //   return ele.replies;
    // });

    // console.log("replies: ", replies);

    return (
      <div>
        {/* <div>msg</div> */}
        <div>{replies2}</div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { threads: state.threads };
};

let Thread = connect(mapStateToProps)(UnconnectedThread);

export default Thread;

import React, { Component } from "react";
import { connect } from "react-redux";
import Replies from "./Replies.jsx";
import { withRouter } from "react-router-dom";
import "./main.css";
class UnconnectedThread extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
  showReplySubmission = () => {
    this.props.dispatch({
      type: "show-form2",
      showAddReply: !this.props.showAddReply
    });
  };
  flipToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render = () => {
    if (this.props.threads.length === 0) {
      alert("loading...");
      return;
    }
    let path = this.props.path;
    let threads = this.props.threads.filter(ele => {
      return ele._id === path;
    });
    let replies2 = threads[0].replies.map(ele => {
      return (
        <div>
          {ele.user} | {ele.msg}
        </div>
      );
    });
    let s = {
      height: "100px",
      width: "100px"
    };
    if (this.state.toggle) {
      s = {
        height: "300px",
        width: "300px"
      };
    }
    return (
      <div>
        <div>
          {threads[0].user} | {threads[0].msg}
          {threads[0].image && (
            <img src={threads[0].image} style={s} onClick={this.flipToggle} />
          )}
        </div>
        <div>{replies2}</div>
        <div>
          {this.props.loggedIn && (
            <button onClick={this.showReplySubmission}>Reply</button>
          )}
          {this.props.showAddReply && <Replies thread={threads[0]} />}
        </div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return {
    threads: state.threads,
    loggedIn: state.loggedIn,
    showAddReply: state.showAddReply
  };
};

let Thread = connect(mapStateToProps)(UnconnectedThread);

export default withRouter(Thread);

import React, { Component } from "react";
import { connect } from "react-redux";
import Replies from "./Replies.jsx";
import { withRouter } from "react-router-dom";

class UnconnectedThread extends Component {
  constructor(props) {
    super(props);
  }
  showReplySubmission = () => {
    this.props.dispatch({
      type: "show-form2",
      showAddReply: !this.props.showAddReply
    });
  };

  render = () => {
    let path = this.props.path;
    console.log(this.props.threads);
    let threads = this.props.threads.filter(ele => {
      console.log("comparing", ele._id, path);
      return ele._id === path;
    });
    console.log("thread.jsx", threads);
    let replies2 = threads[0].replies.map(ele => {
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

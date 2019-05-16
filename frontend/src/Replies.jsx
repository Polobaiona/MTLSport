import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedReplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      message: ""
    };
  }
  handleMessage = event => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("user", this.state.user);
    data.append("msg", this.state.message);
    data.append("threadId", this.props.thread._id);
    console.log("replies.jsx", this.props.thread);
    fetch("http://localhost:4000/replies", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(response => response.text())
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        console.log("BODY", body);
        if (body.success) {
          //   alert("New reply");
          //   console.log("threads", this.state.message);
          //   this.props.dispatch({
          //     type: "set-newReply",
          //     threads: this.state.message
          //   });
          //   this.props.dispatch({ type: "show-form2", showAddReply: false });

          fetch("http://localhost:4000/thread")
            .then(x => x.text())
            .then(responseBody => {
              let body = JSON.parse(responseBody);
              this.props.dispatch({
                type: "get-threads",
                threads: body.results
                // threadId: this.state.threadId,
                // reply: this.state.message
              });
              // this.props.history("/");
            });
        }
      });
  };
  render = () => {
    console.log("hello");
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleMessage}
            placeholder="Message"
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { replies: state.replies };
};

let Replies = connect(mapStateToProps)(UnconnectedReplies);
export default Replies;

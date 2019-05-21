import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedReplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  handleMessage = event => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.message === "") {
      alert("Type your message");
      return;
    }
    this.setState({ message: "" });
    let data = new FormData();
    data.append("msg", this.state.message);
    data.append("threadId", this.props.thread._id);
    fetch("http://localhost:4000/replies", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(response => response.text())
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          alert("New reply");
        }
        fetch("http://localhost:4000/thread")
          .then(x => x.text())
          .then(responseBody => {
            let body = JSON.parse(responseBody);
            this.props.dispatch({
              type: "get-threads",
              threads: body.results
            });
            // this.props.history.push("/");
          });
      });
  };
  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="text-area"
            type="text"
            onChange={this.handleMessage}
            placeholder="Enter your reply"
            value={this.state.message}
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

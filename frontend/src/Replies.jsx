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
  handleUser = event => {
    this.setState({ user: event.target.value });
  };
  handleMessage = event => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("user", this.state.user);
    data.append("message", this.state.message);
    fetch("http://localhost:4000/replies", { method: "POST", body: data })
      .then(response => response.text())
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          alert("New reply");
          this.props.dispatch({
            type: "set-newReply",
            thread: body.results
          });
          this.props.dispatch({ type: "show-form2", showAddReply: false });
        }
        fetch("http://localhost:4000/thread")
          .then(x => x.text())
          .then(responseBody => {
            let body = JSON.parse(responseBody);
            this.props.dispatch({ type: "get-threads", threads: body.results });
            this.props.history("/");
          });
      });
  };
  render = () => {
    console.log("hello");
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleUser} />
          <input
            type="text"
            onChange={this.handleMessage}
            placeholder="message"
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

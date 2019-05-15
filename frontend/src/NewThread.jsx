import React, { Component } from "react";
import { connect } from "react-redux";
class UnconnectedNewThread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      threadTitle: "",
      category: "",
      msg: ""
    };
  }
  handleLocation = event => {
    this.setState({ location: event.target.value });
  };
  handleThreadTitle = event => {
    this.setState({ threadTitle: event.target.value });
  };
  handleSport = event => {
    this.setState({ category: event.target.value });
  };
  handleMessage = event => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("location", this.state.location);
    data.append("threadTitle", this.state.threadTitle);
    data.append("category", this.state.category);
    data.append("msg", this.state.message);
    fetch("http://localhost:4000/new-thread", { method: "POST", body: data })
      .then(response => response.text())
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          alert("New thread added");
          this.props.dispatch({
            type: "set-newThread",
            newThread: body.results
          });
          this.props.dispatch({ type: "show-form", showAddThread: false });
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleLocation}
            placeholder="Location"
          />
          <div>
            {this.props.categories.map(category => {
              return (
                <p>
                  <input
                    type="radio"
                    value={category}
                    checked={this.state.category === category}
                    onChange={this.handleSport}
                  />
                  {category}
                </p>
              );
            })}
          </div>
          <input
            type="text"
            onChange={this.handleThreadTitle}
            placeholder="Title"
          />
          <p>
            <input
              type="text"
              onChange={this.handleMessage}
              placeholder="Message"
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { categories: state.categories };
};
let NewThread = connect(mapStateToProps)(UnconnectedNewThread);
export default NewThread;

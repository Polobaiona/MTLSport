import React, { Component } from "react";
import { connect } from "react-redux";
class UnconnectedNewThread extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "", threadTitle: "", category: "" };
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
  handleSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("location", this.state.location);
    data.append("threadTitle", this.state.threadTitle);
    data.append("category", this.state.category);
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
        }
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
                <div>
                  <input
                    type="radio"
                    value={category}
                    checked={this.state.category === category}
                    onChange={this.handleSport}
                  />
                  {category}
                </div>
              );
            })}
          </div>
          <input
            type="text"
            onChange={this.handleThreadTitle}
            placeholder="Message"
          />
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

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
    fetch("http://localhost:4000/new-thread", {
      method: "POST",
      body: data,
      credentials: "include"
    })
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
        <form id="new-thread" onSubmit={this.handleSubmit}>
          <div>
            <div>Select your location</div>
            <select name="Location" onChange={this.handleLocation}>
              <option value="undefined">-------</option>
              <option value="Ahuntsic">Ahuntsic</option>
              <option value="Anjou">Anjou</option>
              <option value="Cote-Des-Neiges">Cote-Des-Neiges</option>
              <option value="Central Montreal">Central Montreal</option>
              <option value="East-Montreal">East-Montreal</option>
              <option value="Lachine">Lachine</option>
              <option value="Lasalle">Lasalle</option>
              <option value="Hochelaga">Hochelaga</option>
              <option value="Mount-Royal">Mount-Royal</option>
              <option value="Verdun">Verdun</option>
              <option value="West-Island">West-Island</option>
              <option value="Westmount">Westmount</option>
            </select>
          </div>
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
          <p>
            <textarea
              onChange={this.handleThreadTitle}
              placeholder="Title"
              rows="4"
              cols="50"
              form="new-thread"
            />
          </p>
          <p>
            <textarea
              onChange={this.handleMessage}
              placeholder="Message"
              rows="4"
              cols="50"
              form="new-thread"
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

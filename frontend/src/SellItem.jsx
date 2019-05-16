import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class UnconnectedSellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      threadTitle: "",
      category: "",
      msg: "",
      image: ""
    };
  }
  handleLocation = event => {
    this.setState({ location: event.target.value });
  };
  handleThreadTitle = event => {
    this.setState({ threadTitle: event.target.value });
  };
  handleCategory = event => {
    this.setState({ category: event.target.value });
  };
  handleMessage = event => {
    this.setState({ message: event.target.value });
  };
  handleImage = event => {
    this.setState({ image: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("location", this.state.location);
    data.append("threadTitle", this.state.threadTitle);
    data.append("category", this.state.category);
    data.append("msg", this.state.message);
    data.append("image", this.state.image);
    fetch("http://localhost:4000/sell-item", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(response => response.text())
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          alert("New item added");
          this.props.dispatch({
            type: "set-items",
            sellItem: body.results
          });
          this.props.dispatch({ type: "show-sell", showSellItem: false });
        }
        fetch("http://localhost:4000/thread")
          .then(x => x.text())
          .then(responseBody => {
            let body = JSON.parse(responseBody);
            this.props.dispatch({ type: "get-threads", threads: body.results });
            this.props.history.push("/");
          });
      });
  };
  render = () => {
    return (
      <div>
        <form id="sell-item" onSubmit={this.handleSubmit}>
          <div>
            <div>Sell your item here</div>
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
            }
            {this.props.categories.map(category => {
              return (
                <p>
                  <input
                    type="radio"
                    value={category}
                    checked={this.state.category === category}
                    onChange={this.handleCategory}
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
              rows="2"
              cols="30"
              form="sell-item"
            />
          </p>
          <p>
            <textarea
              onChange={this.handleMessage}
              placeholder="Message"
              rows="2"
              cols="30"
              form="new-thread"
            />
          </p>
          <p>
            <textarea
              onChange={this.handleImage}
              placeholder="Image url"
              rows="2"
              cols="30"
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
  return { categories: state.sellCategories };
};
let SellItem = connect(mapStateToProps)(UnconnectedSellItem);
export default withRouter(SellItem);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ThreadModal from "./ThreadModal.jsx";
import FilterLocation from "./FilterLocation.jsx";
import "./main.css";
class UnconnectedBasketball extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    if (this.props.location !== undefined) {
      this.props.dispatch({ type: "location-change", value: undefined });
    }
  };
  render = () => {
    console.log("undefined test: ", this.props.location);

    console.log(this.props.threads);
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "basketball";
      })
      .reverse(); //takes the threads in the soccer category
    if (this.props.location !== undefined) {
      messages = messages.filter(ele => {
        return ele.location === this.props.location;
      });
    }
    let titles = messages.map(ele => {
      let linkTo = "/Basketball/" + ele._id;
      return (
        <div>
          <Link className="threadTitle" to={linkTo}>
            {ele.threadTitle}
          </Link>
        </div>
      );
    }); //returns the title

    return (
      <div>
        <img
          className="thread-img"
          src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GYx5MFB/basketball-amateur-game-boy-make-successful-throw-to-basket-net_n2skahnbe__F0000.png"
        />
        <h2 className="thread-title">Basketball games</h2>
        <div className="all-threads">
          <FilterLocation />
          {this.props.loggedIn && <ThreadModal />}
          <div>{titles}</div>
        </div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return {
    threads: state.threads,
    location: state.location,
    loggedIn: state.loggedIn
  };
};
let Basketball = connect(mapStateToProps)(UnconnectedBasketball);

export default Basketball;

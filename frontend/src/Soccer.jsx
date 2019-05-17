import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilterLocation from "./FilterLocation.jsx";
import ThreadModal from "./ThreadModal.jsx";
class UnconnectedSoccer extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "soccer";
      })
      .reverse(); //takes the threads in the soccer category
    if (this.props.location !== undefined) {
      messages = messages.filter(ele => {
        return ele.location === this.props.location;
      });
    }
    let titles = messages.map(ele => {
      let linkTo = "/Soccer/" + ele._id;
      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle} </Link>
        </div>
      );
    }); //returns the title

    return (
      <div className="fuckOffPaul">
        <div>
          <div>{this.props.loggedIn && <ThreadModal />}</div>
          <FilterLocation />
        </div>
        <div>{titles}</div>
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

let Soccer = connect(mapStateToProps)(UnconnectedSoccer);
export default Soccer;

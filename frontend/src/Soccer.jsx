import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilterLocation from "./FilterLocation.jsx";

class UnconnectedSoccer extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log(this.props.threads);
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "soccer";
      })
      .reverse(); //takes the threads in the soccer category
    console.log("threads: " + JSON.stringify(messages));
    // filter again by location
    console.log("location: ", this.props.location);
    if (this.props.location !== undefined) {
      messages = messages.filter(ele => {
        console.log(
          "ele location: ",
          ele.location,
          " props: ",
          this.props.location
        );

        return ele.location === this.props.location;
      });
    }

    console.log("threads: " + JSON.stringify(messages));

    // ----------------------------------
    let titles = messages.map(ele => {
      let linkTo = "/Soccer/" + ele._id;
      console.log(linkTo);
      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle} </Link>
        </div>
      );
    }); //returns the title

    return (
      <div className="fuckOffPaul">
        <div>
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

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
    let messages = this.props.threads.filter(ele => {
      return ele.category === "soccer";
    }); //takes the threads in the soccer category

    console.log("threads: " + JSON.stringify(messages));

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
      <div className="flex2">
        <div>
          <FilterLocation />
        </div>
        <div>{titles}</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { threads: state.threads };
};

let Soccer = connect(mapStateToProps)(UnconnectedSoccer);
export default Soccer;

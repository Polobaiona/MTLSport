import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NewThread from "./NewThread.jsx";
import FilterLocation from "./FilterLocation.jsx";
class UnconnectedBasketball extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log(this.props.threads);
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "basketball";
      })
      .reverse(); //takes the threads in the soccer category
    console.log("threads: " + JSON.stringify(messages));

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

    let titles = messages.map(ele => {
      let linkTo = "/Basketball/" + ele._id;
      console.log(linkTo);
      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle} </Link>
        </div>
      );
    }); //returns the title
    return (
      <div className="flex2">
        <div>New thread test</div>
        <NewThread />
        <div>
          <FilterLocation />
        </div>
        <div>{titles}</div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { threads: state.threads, location: state.location };
};
let Basketball = connect(mapStateToProps)(UnconnectedBasketball);

export default Basketball;

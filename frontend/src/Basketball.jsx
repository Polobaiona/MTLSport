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
    let messages = this.props.threads.filter(ele => {
      return ele.category === "basketball";
    }); //takes the threads in the soccer category
    console.log("threads: " + JSON.stringify(messages));
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
      <div>
        <div>{titles}</div>
        {/* <NewThread /> */}
        <FilterLocation />
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { threads: state.threads };
};
let Basketball = connect(mapStateToProps)(UnconnectedBasketball);

export default Basketball;

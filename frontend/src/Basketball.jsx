import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ThreadModal from "./ThreadModal.jsx";
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
    if (this.props.location !== undefined) {
      messages = messages.filter(ele => {
        return ele.location === this.props.location;
      });
    }
    let titles = messages.map(ele => {
      let linkTo = "/Basketball/" + ele._id;
      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle} </Link>
        </div>
      );
    }); //returns the title
    return (
      <div className="fuckOffPaul">
<<<<<<< HEAD
        <div>New thread test</div>
        <NewThread />
=======
        <div>{this.props.loggedIn && <ThreadModal />}</div>
>>>>>>> ccc09ff080b4ada00acc5bb8a3f0299c125c039c
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
let Basketball = connect(mapStateToProps)(UnconnectedBasketball);

export default Basketball;

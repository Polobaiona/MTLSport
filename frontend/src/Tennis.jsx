import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilterLocation from "./FilterLocation.jsx";
import ThreadModal from "./ThreadModal.jsx";
class UnconnectedTennis extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log(this.props.threads);
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "tennis";
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
      let linkTo = "/Tennis/" + ele._id;
      return (
        <Link className="thread" to={linkTo}>
          {ele.threadTitle}{" "}
        </Link>
      );
    }); //returns the title

    /*let replies = messages[0].replies.map(ele => {
      return (
        <div>
          <div>
            {ele.user} | {ele.msg}
          </div>
        </div>
      );
    });*/
    return (
      <div>
        <img
          height="600px"
          width="1260px"
          src="https://media.timeout.com/images/102789069/image.jpg"
        />
        <h2 className="thread-title"> Tennis games</h2>
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
let Tennis = connect(mapStateToProps)(UnconnectedTennis);
export default Tennis;

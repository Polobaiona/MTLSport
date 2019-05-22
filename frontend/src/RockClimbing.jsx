import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilterLocation from "./FilterLocation.jsx";
import ThreadModal from "./ThreadModal.jsx";
class UnconnectedRockClimbing extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    if (this.props.location !== undefined) {
      this.props.dispatch({ type: "location-change", value: undefined });
    }
  };
  render = () => {
    console.log(this.props.threads);
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "rockclimbing";
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
      let linkTo = "/RockClimbing/" + ele._id;
      return (
        <div>
          <Link className="threadTitle" to={linkTo}>
            {ele.threadTitle}
          </Link>
        </div>
      );
    });

    if (titles.length === 0) {
      return (
        <div>
          <img
            className="thread-img"
            src="https://mec.imgix.net/medias/sys_master/images/images/h0b/hb5/9001026158622/18-CM-61-Diversity-Explore-Hero-5x2-Climbing.jpg?w=1100&h=441&auto=format&q=30&bg=FFF"
          />
          <h2 className="thread-title">Rock Climbing</h2>
          <div className="all-threads">
            <FilterLocation />
            {this.props.loggedIn && <ThreadModal />}
            <div className="thread-title-display no-games-message">
              No one is looking for games in your area, start one!
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <img
          height="500px"
          width="100%"
          src="https://mec.imgix.net/medias/sys_master/images/images/h0b/hb5/9001026158622/18-CM-61-Diversity-Explore-Hero-5x2-Climbing.jpg?w=1100&h=441&auto=format&q=30&bg=FFF"
        />
        <h2 className="thread-title">Rock Climbing</h2>
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
let RockClimbing = connect(mapStateToProps)(UnconnectedRockClimbing);

export default RockClimbing;

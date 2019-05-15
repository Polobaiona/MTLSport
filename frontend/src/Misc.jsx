import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilterLocation from "./FilterLocation.jsx";

class UnconnectedMisc extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log(this.props.threads);
    let messages = this.props.threads
      .filter(ele => {
        return ele.category === "misc";
      })
      .reverse(); //takes the threads in the soccer category

    console.log("threads: " + JSON.stringify(messages));

    let titles = messages.map(ele => {
      let linkTo = "/Misc/" + ele._id;
      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle} </Link>
        </div>
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
      <div className="flex2">
        <FilterLocation />
        <div>{titles}</div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { threads: state.threads };
};
let Misc = connect(mapStateToProps)(UnconnectedMisc);

export default Misc;

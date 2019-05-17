import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedFrontPageThreads extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    if (this.props.threads.length === 0) return "loading";
    console.log(this.props.threads);
    //let messages = this.props.threads.reverse();
    let messages = [];
    this.props.threads.forEach(ele => messages.unshift(ele));
    console.log("messages: ", messages);
    let threadTitles = [];

    let i = 0;
    while (threadTitles.length < 5 && i < messages.length) {
      //for (let i = 0; /*i < 5 &&*/ i < this.props.threads.length; i++) {
      console.log("i =", i);
      console.log("messages[i] category: ", messages[i].category);
      if (
        messages[i].category === "basketball" ||
        messages[i].category === "hockey" ||
        messages[i].category === "rockclimbing" ||
        messages[i].category === "soccer" ||
        messages[i].category === "tennis" ||
        messages[i].category === "misc"
      ) {
        threadTitles.push(messages[i]);
      }
      i++;
      // }
    }

    console.log("thread titles = ", threadTitles);

    let titles = threadTitles.map(ele => {
      let linkTo = "/" + ele.category + "/" + ele._id;

      return (
        <div>
          <Link to={linkTo}>{ele.threadTitle}</Link>
        </div>
      );
    });

    return <div>{titles}</div>;
  };
}

let mapStateToProps = state => {
  return {
    threads: state.threads,
    location: state.location,
    loggedIn: state.loggedIn
  };
};

let FrontPageThreads = connect(mapStateToProps)(UnconnectedFrontPageThreads);

export default FrontPageThreads;

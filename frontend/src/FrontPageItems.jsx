import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedFrontPageItems extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    if (this.props.threads.length === 0) return "loading";

    let messages = this.props.threads.reverse();

    console.log("messages: ", messages);
    let threadTitles = [];

    let i = 0;
    while (threadTitles.length < 5 && i < messages.length) {
      console.log("message category: ", messages[i].category);
      if (
        messages[i].category === "sellBasketball" ||
        messages[i].category === "sellHockey" ||
        messages[i].category === "sellRockClimbing" ||
        messages[i].category === "sellSoccer" ||
        messages[i].category === "sellTennis" ||
        messages[i].category === "sellMisc"
      ) {
        threadTitles.push(messages[i]);
      }
      i++;
    }

    console.log("threadTitles: ", threadTitles);
    let titles = threadTitles.map(ele => {
      let linkTo = "/" + ele.category + "/" + ele._id;

      return (
        <div>
          <Link to={linkTo}>
            <img src={ele.image} />
          </Link>
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

let FrontPageItems = connect(mapStateToProps)(UnconnectedFrontPageItems);

export default FrontPageItems;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedFrontPageThreads extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    fetch("http://localhost:4000/thread")
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        this.props.dispatch({
          type: "get-threads",
          threads: body.results
        });
      });
  };
  render = () => {
    console.log(this.props.threads);
    let messages = this.props.threads;

    console.log("messages: ", messages);
    let threadTitles = [];

    for (let i = 0; i < 4; i++) {
      threadTitles.push(messages[i]);
    }

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
  return { threads: state.threads };
};

let FrontPageThreads = connect(mapStateToProps)(UnconnectedFrontPageThreads);

export default FrontPageThreads;

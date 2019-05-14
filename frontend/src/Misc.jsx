import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedMisc extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log(this.props.threads);
    let messages = this.props.threads.filter(ele => {
      return ele.category === "misc";
    }); //takes the threads in the soccer category

    console.log("threads: " + JSON.stringify(messages));

    let titles = messages.map(ele => {
      let linkTo = "/Misc/" + ele._id;
      return <Link to={linkTo}>{ele.threadTitle} </Link>;
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
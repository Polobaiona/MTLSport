import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class UnconnectedDetailsUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [{ user: "", firstName: "", lastName: "" }]
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:4000/detailsUser")
      .then(x => x.text())
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        let details = body.results.filter(ele => {
          console.log("comparaison", ele.user, this.props.username);
          return ele.user === this.props.username;
        });
        console.log("details", details);
        this.setState({ details });
      });
  };
  render = () => {
    console.log("state", this.state);
    return (
      <div>
        <div>{this.state.details[0].user}</div>
        <div>{this.state.details[0].firstName}</div>
        <div>{this.state.details[0].lastName}</div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return {
    username: state.username
  };
};
let DetailsUser = connect(mapStateToProps)(UnconnectedDetailsUser);

export default withRouter(DetailsUser);

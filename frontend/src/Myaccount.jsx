import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class UnconnectedAccount extends Component {
  logout = () => {
    fetch("http://localhost:4000/logout", { credentials: "include" })
      .then(header => {
        return header.text();
      })
      .then(responseBody => {
        console.log(responseBody);
        let body = JSON.parse(responseBody);
        if (body.success) {
          console.log("logged out ");
          this.props.dispatch({ type: "logout" });
          console.log("log in" + this.props.loggedIn);
          this.props.history.push("/");
        }
      });
  };
  render = () => {
    return (
      <div>
        Test Account
        <button onClick={this.logout}>log out!</button>
      </div>
    );
  };
}

let Myaccount = connect()(UnconnectedAccount);

export default withRouter(Myaccount);

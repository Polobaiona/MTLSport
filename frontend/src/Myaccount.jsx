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
        let body = JSON.parse(responseBody);
        if (body.success) {
          this.props.dispatch({ type: "logout" });
          this.props.history.push("/");
        }
      });
  };
  render = () => {
    return (
      <div>
        <div className="img">
          <img src="http://simpleicon.com/wp-content/uploads/account.png" />
        </div>
        <div className="logout">
          <button onClick={this.logout}>log out!</button>
        </div>
      </div>
    );
  };
}

let Myaccount = connect()(UnconnectedAccount);

export default withRouter(Myaccount);

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

class UnconnectedAccount extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // username: "",
    //   // firstName: "",
    //   // lastName: ""
    // };
  }
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
        <div className="account">
          <div>
            <img
              className="img"
              src="http://simpleicon.com/wp-content/uploads/account.png"
            />
          </div>
          <div className="accountinfos">
            <p>Your personal information: </p>
            <p id="user">Your username: {this.props.username}</p>
            <p id="user">Your first name: {this.props.firstName}</p>
            <p id="user">Your last name: {this.props.lastName}</p>
            <p id="user">You are: {this.props.age} years old</p>
          </div>
        </div>
        <div>
          <div className="logout">
            <button onClick={this.logout}>log out!</button>
          </div>
        </div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return {
    username: state.username,
    firstName: state.firstName,
    lastName: state.lastName,
    age: state.age
  };
};
let Myaccount = connect(mapStateToProps)(UnconnectedAccount);

export default withRouter(Myaccount);

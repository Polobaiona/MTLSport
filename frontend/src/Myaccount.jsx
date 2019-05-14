import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedAccount extends Component {
  render = () => {
    return <div>Test Account</div>;
  };
}

let Myaccount = connect()(UnconnectedAccount);

export default Myaccount;

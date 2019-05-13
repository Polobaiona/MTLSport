import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedUserDetails extends Component {
  render = () => {
    return <div>Test User Details</div>;
  };
}

let UserDetails = connect()(UnconnectedUserDetails);

export default UserDetails;

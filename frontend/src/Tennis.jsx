import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedTennis extends Component {
  render = () => {
    return <div>Tennis Subforum</div>;
  };
}

let Tennis = connect()(UnconnectedTennis);
export default Tennis;

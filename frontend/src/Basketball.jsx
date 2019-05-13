import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedBasketball extends Component {
  render = () => {
    return <div>Basketball subforum</div>;
  };
}

let Basketball = connect()(UnconnectedBasketball);

export default Basketball;

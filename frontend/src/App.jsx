import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

class UnconnectedApp extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <div>Top bar (Title, login/signup -> account)</div>
        <div>Forum</div>
      </BrowserRouter>
    );
  };
}

let App = connect()(UnconnectedApp);
export default App;

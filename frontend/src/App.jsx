import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import MainForum from "./MainForum.jsx";

class UnconnectedApp extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <TopBar />
        </div>
        <div>
          <MainForum />
        </div>
      </BrowserRouter>
    );
  };
}

let App = connect()(UnconnectedApp);
export default App;

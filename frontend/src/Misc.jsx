import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedMisc extends Component {
  render = () => {
    return <div>Misc subforum</div>;
  };
}

let Misc = connect()(UnconnectedMisc);

export default Misc;

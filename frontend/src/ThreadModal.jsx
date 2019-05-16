import React, { Component } from "react";
import NewThread from "./NewThread.jsx";
class ThreadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggered: false
    };
  }
  toggleModal = () => {
    this.setState({ triggered: !this.state.triggered });
  };
  render = () => {
    let modal = undefined;
    if (this.state.triggered) {
      modal = (
        <div className="modal-body">
          <div className="modal-container">
            <NewThread />
            <button onClick={this.toggleModal}>Close</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        {modal}
        <button onClick={this.toggleModal}>Add new thread</button>
      </div>
    );
  };
}
export default ThreadModal;

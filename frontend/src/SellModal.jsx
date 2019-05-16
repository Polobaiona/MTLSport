import React, { Component } from "react";
import SellItem from "./SellItem.jsx";
class SellModal extends Component {
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
            <SellItem />
            <button onClick={this.toggleModal}>Close</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        {modal}
        <button onClick={this.toggleModal}>Add item for sale</button>
      </div>
    );
  };
}
export default SellModal;

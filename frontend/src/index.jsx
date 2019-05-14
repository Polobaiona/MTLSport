import ReactDOM from "react-dom";
import "./main.css";
import React from "react";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store.js";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

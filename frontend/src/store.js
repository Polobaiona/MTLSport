import { createStore } from "redux";

let reducer = (state, action) => {};

const store = createStore(
  reducer,
  {
    loggedIn: false,
    category: undefined,
    location: undefined
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

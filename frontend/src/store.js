import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
  if (action.type === "get-threads") {
    return { ...state, threads: action.threads };
  }
  if (action.type === "logout") {
    return { ...state, loggedIn: false };
  }

  return state;
};

const store = createStore(
  reducer,
  {
    loggedIn: false,
    category: undefined,
    location: undefined,
    threads: []
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

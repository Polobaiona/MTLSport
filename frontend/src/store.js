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
  if (action.type === "set-newThread") {
    return { ...state, newThread: [] };
  }
  if (action.type === "show-form") {
    return { ...state, showAddThread: action.showAddThread };
  }
  if (action.type === "location-change") {
    console.log("changed state location to: ", action.value);
    return { ...state, location: action.value };
  }
  if (action.type === "show-form2") {
    return { ...state, showAddReply: action.showAddReply };
  }
  if (action.type === "set-newReply") {
    return { ...state, Thread: [] };
  }
  return state;
};
const store = createStore(
  reducer,
  {
    loggedIn: false,
    categories: [
      "soccer",
      "basketball",
      "tennis",
      "misc",
      "rockclimbing",
      "hockey"
    ],
    location: undefined,
    threads: [],
    newThread: [],
    showAddThread: false,
    showAddReply: false
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

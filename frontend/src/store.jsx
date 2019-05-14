import { createStore } from "redux";

let reducer = (state, action) => {
  return state;
};

const store = createStore(
  reducer,
  {
    loggedIn: false,
    category: undefined,
    location: undefined,
    threads: [
      {
        username: "gene",
        category: "soccer",
        msg: "looking for sport"
      },
      {
        username: "paul",
        category: "hockey",
        msg: "looking for hockey"
      }
    ]
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

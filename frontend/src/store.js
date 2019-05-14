import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
  //if (action.type === "get-threads") {
  //return { ...state, threads: action.threadArray };
  //}
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
        id: 1,
        category: "soccer",
        threadTitle: "Soccer at 10am - saturday",
        location: "NDG",
        replies: [
          { user: "gene", msg: "looking for sport" },
          { user: "paul", msg: "I can make it" }
        ]
      },
      {
        id: 2,
        category: "hockey",
        threadTitle: "hockey at 2pm - saturday",
        location: "Plateau",
        replies: [
          { user: "gene", msg: "looking for hockey game" },
          { user: "paul", msg: "I want to play hockey" }
        ]
      },
      {
        id: 3,
        category: "soccer",
        threadTitle: "soccer at 8am tomorrow",
        location: "Verdun",
        replies: [
          { user: "soccerman", msg: "pls soccer" },
          { user: "soccerman2", msg: "i am mr.soccer" }
        ]
      }
    ]
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

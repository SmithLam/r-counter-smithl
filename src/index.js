import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 0,
  boxcount: [],
  colorAll: "pink",
  colorEach: "pink",
  index: null,
};

//reducer always needs two arguments, state THEN action
function reducer(state = initialState, action) {
  if (action.type === "increment") {
    state.count++;
    state.boxcount.push(1);
  }
  if (action.type === "decrement") {
    state.count--;
    state.boxcount.splice(-1);
  }
  if (state.count < 0) {
    state.count = 0;
  }
  if (action.type === "change-all-color") {
    state.colorAll = action.payload;
  }
  if (action.type === "change-each-color") {
    state.colorEach = action.payload.color;
    state.index = action.payload.index;
  }
  if (action.type === "reset") {
    state = initialState;
    state.boxcount = [];
  }
  return { ...state }; //grab everything inside initialState and make a new object and return
}

//store is an object
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

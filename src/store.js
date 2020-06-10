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
    state.boxcount.push('');
  }
  if (action.type === "decrement") {
    state.count--;
    state.boxcount.splice(-1); //or you can use state.boxcount.pop()
  }
  if (state.count < 0) {
    state.count = 0;
  }
  if (action.type === "change-all-color") {
    state.colorAll = action.payload;
  }
  if (action.type === "change-each-color") {
    // state.colorEach = action.payload.color;
    // state.index = action.payload.index;
    state.boxcount[action.payload.index] = action.payload.color;
  }
  if (action.type === "reset") {
    state = initialState;
    state.boxcount = [];
  }
  return { ...state }; //grab everything inside initialState and make a new object and return
}

//store is an object
const store = createStore(reducer);

export default store
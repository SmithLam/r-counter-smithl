import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Box from "./components/Box";

function App() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  const increaseNum = () => {
    dispatch({ type: "increment", payload: "" }); //dispatch send action, and action is object
  };

  return (
    <div className="App">
      <h1>Smith's Colorful Boxes</h1>
      <h2>{state.count}</h2>
      <button onClick={() => increaseNum()}>Increment</button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: { num: 2, message: "bitna is amazing" },
          })
        }
      >
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <input
        type="text"
        onChange={(event) => {
          dispatch({ type: "change-all-color", payload: event.target.value });
        }}
      />

      <div className="box-color">
        {state.boxcount.map((box, index) => {
          return <Box id={index} />;
        })}
      </div>
    </div>
  );
}

export default App;

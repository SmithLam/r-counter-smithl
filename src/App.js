import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

  let count = useSelector(state=>state.count)
  let boxcount = useSelector(state=>state.boxcount)
  let colorAll = useSelector(state=>state.colorAll)
  let dispatch = useDispatch()

  const increaseNum = () =>{
    dispatch({type:"increment", payload:""}) //dispatch send action, and action is object
  }


  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
    <button onClick = {() => increaseNum()}>Increment</button>
    <button onClick = {() => dispatch({type:"decrement", payload:{num:2, message:"bitna is amazing"}})}>Decrement</button>
    <button onClick = {() => dispatch({type:"reset"}) }>Reset</button>
    <input type="text" onChange={event => {dispatch({type:"change-all-color", payload:event.target.value})}} />
    <div id="box"><center><p>This box is amazing!</p>
    <p><input type="text" /></p></center></div>

    <div>{boxcount.map((box, index) => {
       return (<div id="box" style={{ backgroundColor: colorAll }} ><center><p>This box is amazing</p>
       <p><input type="text" onChange={event => {dispatch({type:"change-each-color", payload:{index: index, color:event.target.value}})}}/></p></center></div>)
    })}
    </div>

    </div>
  );
}

export default App;

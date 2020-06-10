//Redux method
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Box(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let singleColor = state.boxcount[props.id];
  let allColor = state.colorAll;

  let [color, setColor] = useState(null);
  console.log("this is all color", allColor)
  console.log("this is single color",singleColor)
  // useEffect(() => {
  //   if (state.colorAll !== null) {
  //     setColor(state.colorAll);
  //   }
  // }, [state.colorAll]);

  return (
    <div>
      <div
        id="box"
        style={{
          backgroundColor: singleColor ? singleColor : allColor,
        }}
      >
        <center>
          <p>This box is {state.count}!</p>
          <p>
            <input
              type="text"
              onChange={(event) => {
                dispatch({
                  type: "change-each-color",
                  payload: { index: props.id, color: event.target.value },
                });
              }}
            />
          </p>
        </center>
      </div>
    </div>
  );
}
//Redux method

//useState method
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// export default function Box(props) {
//   let state = useSelector((state) => state);
//   let dispatch = useDispatch();

//   let [color, setColor] = useState(null);

//   //useEffect
//   useEffect(() => {
//     if (state.colorAll != null) {
//       setColor(state.colorAll);
//     }
//   }, [state.colorAll]);

//   return (
//     <div>
//       <div id="box" style={{ backgroundColor: color }}>
//         <center>
//           <p>
//             This box is {props.id + 1} and is {state.color}!
//           </p>
//           <p>
//             <input
//               type="text"
//               onChange={(event) => setColor(event.target.value)}
//             />
//           </p>
//         </center>
//       </div>
//     </div>
//   );
// }
//useState method

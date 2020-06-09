import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Box(props) {
    let count = useSelector(state=>state.count)
    let boxcount = useSelector(state=>state.boxcount)
    let colorAll = useSelector(state=>state.colorAll)
    let colorEach = useSelector(state=>state.colorEach)
    let dispatch = useDispatch()

    let [color, setColor] = useState(null)

 
    //useEffect
    useEffect(()=>{
        if (colorAll != null){
            setColor(colorAll)
        }
    },[colorAll]) ;
  


    return (
        <div>
        <div id="box" style={{ backgroundColor: color}} ><center><p>This box is amazing!</p>
       <p><input type="text" onChange={event => setColor(event.target.value)}/></p></center></div>

        </div>
    )
}

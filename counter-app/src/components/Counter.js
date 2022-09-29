import React from 'react'
import './style.css'
import {increaseValue, decreaseValue} from "../redux/action-creator"
import {useSelector, useDispatch} from "react-redux"
function Counter() {

  const myState = useSelector(state=>state.ourState.count)
  const dispatch = useDispatch()
  console.log("++++ myState ++++", myState)
  return (
    <div className="box">
        <h1>Counter App</h1>
        <button className='btn' onClick={()=>dispatch(increaseValue)}>Increment</button>
        <p className='numb'>{myState}</p>
        <button className='btn' onClick={()=>dispatch(decreaseValue)}>Decrement</button>
    </div>
  )
}

export default Counter
import React from 'react'
import { useReducer } from 'react'


function reducer(state,action) {
    if(action.type === 'incremented_age'){
        return {age : state.age +1}
    }
    if(action.type === 'double_incremented_age'){
        return {age : state.age +2}
    }
    throw Error("Unknown action.")
}

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, {age:42})
  return (
    <div>
        <button onClick={()=> {dispatch({ type:'incremented_age'}) }}>Increment age</button>
        <button onClick={()=>{dispatch({type:'double_incremented_age'})}}>Double incremented age</button>
      <p>Hello! You are {state.age}.</p>
    </div>
  )
}

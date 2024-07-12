import React, { useReducer,memo,useMemo,useCallback} from 'react'

function click(state,action) {
    switch (action.type) {
        case 'one_click':{
            return{
            clickCount:state.clickCount+1
        }}
        case 'two_click':{
            return{
            clickCount:state.clickCount+2
        }}
        case 'three_click':{
            return{
            clickCount:state.clickCount+3
        }}
    }
    throw Error('Unknown action: ' + action.type);
}

export default function Example() {
    const [state, dispatch] = useReducer(click,{clickCount:0})
    function oneClick() {
        dispatch({ type: 'one_click' });
      }
  return (
    <div>
        <button onClick={oneClick}>
            Yanak (+1)
        </button>
        <button onClick={()=>dispatch({type:'two_click'})}>Dudak(+2)</button>
        <button onClick={()=>dispatch({type:'three_click'})}>Gıdı(+3)</button>
        
        <h1>alperen ilaydayı {state.clickCount} kere öpmek istedi</h1>
    </div>
  )
}

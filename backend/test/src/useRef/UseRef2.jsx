import React, { useEffect, useRef } from 'react'

export default function UseRef2() {
    const inputRef = useRef();
    useEffect (()=>{
        inputRef.current.focus()
    },[])
    
  return (
    <div>
        <input type='text' ref={inputRef}/>
        <button>sasa</button>
    </div>

  )
}

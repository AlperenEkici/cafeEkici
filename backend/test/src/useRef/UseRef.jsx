import React, { useRef } from 'react'

export default function UseRef() {
    const inputRef = useRef()
    
    function focusInput(){
        console.log(inputRef.current.focus())
    }


  return (
    <div>
            <input ref={inputRef}/>
            <button onClick={focusInput}>focusla</button>

    </div>
  )
}

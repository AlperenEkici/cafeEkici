import React, { useState } from 'react'
import Example1 from './Example1'
import App2 from '../reducer/App2'

export default function App3() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <App2></App2>
      {/* <button onClick={() => setShow(show => !show)}>
      {show ? 'gizle' : 'göster'}
      </button>
      {show && <Example1/>} */}
    </div>
  )
}

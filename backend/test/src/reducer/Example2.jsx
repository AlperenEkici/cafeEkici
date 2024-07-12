import React, { useState } from 'react'

export default function Example2() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const handleSubmit = e =>{
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo("")
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' value={todo} onChange={e => setTodo(e.target.value)}/>
        <button type='submit'> add</button>
     </form>
     <ul>
        {todos.map((todo,index)=>(
            <li>
                {todo}
            </li>
        ))}
     </ul>
    </>
  )
}

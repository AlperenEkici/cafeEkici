import React, { useEffect, useRef, useState } from 'react'

export default function Example3() {
   const idRef = useRef(3)
    const [todos, setTodos] = useState([
        {id:1,name:"alperen"},
        {id:2,name:"İlayda"}
    ])
    const inputRef = useRef()
    
    const handleSubmit = e =>{
        e.preventDefault()
        setTodos([...todos,{id:idRef.current++ ,name:inputRef.current.value}])
        inputRef.current.value = ""
    }

    useEffect(()=>{
        console.log(inputRef)
        inputRef.current.focus()
    },[])
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input  type='text' ref={inputRef} />
        <button type='submit'> add</button>
     </form>
     <ul>
        {todos.map((todo)=>(
            <li>
                {todo.id}-{todo.name}
            </li>
        ))}
     </ul>
    </>
  )
}
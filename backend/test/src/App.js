import React, { useState } from 'react'

function NameList() {
  const [list, setList] = useState(["Jack","Jill","John"])
  const[name,setName] = useState()

  const onAddName = () =>{
    if(name !== "")
    setList( [...list,name] )
    setName("")
    
  }
  return(
    <div>
      <ul>
        {list.map((name)=> (
          <li key={name}> {name} </li>
        ))}
      </ul>
      <input 
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      
      <button onClick={onAddName}>
          onAddName
      </button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10)
  
  function addOne() {
    setCount(count=>count +1) //count+1 olsa 3 arttır düzgün çalışmaz
  }
  
  return(
    <div>
      <button onClick={addOne}>Count={count}</button>
      <button onClick={()=>{addOne();
                            addOne();
                            addOne();
                            }}>+3={count}</button>
    </div>
  )

}
function App() {
  return (
    <div>
      <Counter/>
      <NameList/>    
    </div>
  )
}

export default App
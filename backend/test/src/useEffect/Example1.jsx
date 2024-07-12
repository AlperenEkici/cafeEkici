import React , {useEffect, useState} from 'react'

export default function Example1() {
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        console.log('component ilk yüklendiginde çalışır')
        return() =>{                                            //sadece 1 kez çalışır
            console.log('component destroyed(yıkıldı)')
        }
    },[])

    useEffect(()=>{
        console.log('count degeri degişti ',count)     //count degişince çalışır
    },[count])


    useEffect(()=>{
        console.log('component render oldu')    // sürekli çalışır
    })
  return (
    <div >
        <h3>{count}</h3>
        <button onClick={()=>setCount(count => count+1)}>Arttır</button>
        test componenti
    </div>
  )
}

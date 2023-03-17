import { useCounter } from "../hooks"
import { useState } from "react"
import { useMemo } from "react"

const heavyStuff = ( iterationValue = 100 ) => {

    for(let i = 0; i < iterationValue; i++) {
        console.log('here we go')
    }

    return `${iterationValue} times iterated`

}


export const MemoHook = () => {

    const {counter , add } = useCounter(500)
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] )

   
  return ( 
    <>
    <h1>Counter: <small>{ counter }</small></h1>
    <hr/>
    <h4>{memorizedValue}</h4>
    <button className="btn btn-primary" onClick={()=> add(1)}>
        Add
    </button>
    <button onClick={() => setShow(!show)} className="btn btn-outline-primary">
        show/hide {JSON.stringify(show)}
    </button>
    </>
  )
    
  
}


import { useCounter } from "../hooks"
import { Small } from "./Small"
import { useState } from "react"



export const Memorize = () => {

    const {counter , add } = useCounter(1)
    const [show, setShow] = useState(true);

    console.log('rendering Memorize');

   
  return ( 
    <>
    <h1>Counter: <Small counter={counter}/></h1>
    <hr/>
    <button className="btn btn-primary" onClick={()=> add()}>
        Add
    </button>
    <button onClick={() => setShow(!show)} className="btn btn-outline-primary">
        show/hide {JSON.stringify(show)}
    </button>
    </>
  )
    
  
}


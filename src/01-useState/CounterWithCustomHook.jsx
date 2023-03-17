import { useCounter } from "../hooks"


const CounterWithCustomHook = () => {

const { counter, add, rest, reset } = useCounter()

  return (
    <>
    <h1>Counter with Hook: { counter }</h1>
    <hr/>
    <button className="btn btn-primary" onClick={() => add(3)}>+1</button>
    <button className="btn btn-primary"onClick={reset} >reset</button>
    <button className="btn btn-primary" onClick={rest}>-1</button>
    </>
  )
}

export default CounterWithCustomHook
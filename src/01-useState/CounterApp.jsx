import { useState } from 'react'


const CounterApp = () => {

    const [ state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const { counter1, counter2 , counter3 } = state

    return (
        <>
            <hr />
            <h1>Counter 1 : {counter1}</h1>
            <h1>Counter 2 : {counter2}</h1>
            <h1>Counter 3 : {counter3}</h1>

            <button className="btn" onClick={() => setState((prevState) => ({
                ...prevState,
                counter1: prevState.counter1 + 1
            }))}>
                +1
            </button>
        </>
    )
}

export default CounterApp
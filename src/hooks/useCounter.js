import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const add = (value = 1) => setCounter( counter + value)
    const rest = () => {
        if (counter === 0) return 
        setCounter( counter - 1)
    }
    const reset = () => setCounter( initialValue )


    return {
        counter,
        add,
        reset,
        rest
    }
}
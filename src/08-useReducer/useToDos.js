
import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || [] 
}

export const useToDos = () => {

    const [toDos, dispatch] = useReducer(todoReducer, initialState, init )

    useEffect(() => {

        localStorage.setItem('toDos', JSON.stringify(toDos) || [])

        
    }, [toDos]);

    const handleNewTodo = (todo) => {
        
        

            const action = {
                type: 'ADD',
                payload: todo
            }
    
            dispatch( action )
        
        
    }

    const handleDeleteTodo = ( id ) => {
        const action = {
            type: 'DELETE',
            payload: id
        }

        dispatch( action )
    }

    const handleToggleTodo = ( id ) => {
        

        const action = {
            type: 'TOGGLE',
            payload: id
        }

        dispatch( action )

    }

  return {

    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    toDos

  }




}

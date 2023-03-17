import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoTitle } from "./TodoTitle"
import { TodoInput } from "./TodoInput"

const initialState = [ 
]

const init = () => {
    return JSON.parse(localStorage.getItem('toDos'))
}

export const TodoApp = () => {

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


    return (
        <>
            < TodoTitle />

            < TodoList toDos={toDos} />

            < TodoInput onNewTodo={handleNewTodo} toDos={toDos} />

        </>
    )
}

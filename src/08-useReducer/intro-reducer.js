

const initialState = [{
    id: 1,
    todo: 'Do laundry',
    done:false
}]

const todoReducer = (state = initialState, action = {}) => {

    if ( action.type  === 'ADD TO-DO') {
        return [...state, action.payload]
    }

    return state

}

let todos;

const newTodo = {
    id:2,
    todo: 'call mom',
    done:false
}

const addToDoAction = {
    type: 'ADD TO-DO',
    payload: newTodo
}

todos = todoReducer( todos , addToDoAction)
// console.log({state:todos});


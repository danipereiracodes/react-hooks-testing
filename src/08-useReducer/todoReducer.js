
export const todoReducer = (initialState, action) => {

    if( action.type === 'ADD') {
        return [ ...initialState , action.payload ]
        
    } 

    if( action.type === 'DELETE') {
        return initialState.filter(( todo ) => todo.id !== action.payload )
        
    } 

    return initialState
}
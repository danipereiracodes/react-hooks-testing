import { TodoList } from "./TodoList"
import { TodoTitle } from "./TodoTitle"
import { TodoInput } from "./TodoInput"
import { useToDos } from "./useToDos"

export const TodoApp = () => {

   const { handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo, toDos } = useToDos()


    return (
        <>
            < TodoTitle />

            < TodoList toDos={toDos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />

            < TodoInput onNewTodo={handleNewTodo} toDos={toDos} />

        </>
    )
}

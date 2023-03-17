import { TodoListItem } from "./TodoListItem"

export const TodoList = ({toDos}) => {
  return (
    <ul className="list-group">
                {toDos && toDos.map( (todo) => (
                    <TodoListItem key={todo.id} {...todo} />
                ))}
            </ul>
  )
}

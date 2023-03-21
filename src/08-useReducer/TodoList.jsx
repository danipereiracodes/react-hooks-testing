import { TodoListItem } from "./TodoListItem"

export const TodoList = ({toDos, onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
                {toDos && toDos.map( (todo) => (
                    <TodoListItem 
                    key={todo.id} {...todo} 
                    onDeleteTodo={ onDeleteTodo  } 
                    onToggleTodo={onToggleTodo} />
                ))}
            </ul>
  )
}

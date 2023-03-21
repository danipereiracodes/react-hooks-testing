

export const TodoListItem = ({ id, todo, done, onDeleteTodo, onToggleTodo }) => {

  return (
    <li className="list-group-item" onClick={() => onToggleTodo(id)}>
      <time>{id}</time>
      <h3 className={done ? 'item-done' : 'item-not-done'}>
        {todo}</h3>
      <button onClick={ () => onDeleteTodo(id)}className="btn btn-danger">x</button>
    </li>
  )
}

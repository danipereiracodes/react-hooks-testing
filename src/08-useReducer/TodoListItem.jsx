

export const TodoListItem = ({ id, todo, done }) => {

  return (
    <li className="list-group-item">
      <time>{id}</time>
      <h3>{todo}</h3>
      <button className="btn btn-danger">x</button>
    </li>
  )
}

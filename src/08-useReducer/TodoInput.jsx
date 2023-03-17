import { useForm } from '../hooks/useForm'
export const TodoInput = ({ onNewTodo }) => {

  const {
    todo,
    test,
    onResetForm,
    onInputChange

  } = useForm({
    todo: '',
    test: 'testing...',


  })



  const onFormSubmit = (event) => {

    event.preventDefault()

    const newTodo = {
      id: new Date().getTime() * 5,
      todo,
      test,

      done: false
    }

    onNewTodo(newTodo)
    onResetForm()

  }

  return (
    <div className="mt-5">
      <h4>Add to-do</h4>
      <form onSubmit={onFormSubmit}>
        <input onChange={onInputChange} value={todo} type="text" name="todo" id="" placeholder="what to do" />
        <button className="btn btn-primary" type="submit">add todo</button>
      </form>
    </div>
  )
}

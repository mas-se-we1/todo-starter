import { Todo } from '../../models/Todo'

interface Props {
  todo: Todo
  updateTodo: (todo: Todo) => void
}

export const CheckboxDone = ({ todo, updateTodo }: Props) => {
  const updateDone = () => {
    updateTodo({ ...todo, done: !todo.done })
  }

  return (
    <label>
      <input type="checkbox" onChange={updateDone} checked={todo.done} />
      Done
    </label>
  )
}

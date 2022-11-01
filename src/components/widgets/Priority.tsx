import { Todo } from 'models/Todo'
import { Flash } from '../controls/Flash'
import './Priority.css'

interface Props {
  todo: Todo
  updateTodo: (todo: Todo) => void
}

export const Priority = ({ todo, updateTodo }: Props) => {
  return (
    <div className="priority">
      <Flash id={3} todo={todo} updateTodo={updateTodo} />
      <Flash id={2} todo={todo} updateTodo={updateTodo} />
      <Flash id={1} todo={todo} updateTodo={updateTodo} />
    </div>
  )
}

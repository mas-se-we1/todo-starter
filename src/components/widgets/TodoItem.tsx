import './TodoList.css'

import { Todo } from '../../models/Todo'
import { Button } from 'components/controls/Button'
import { CheckboxDone } from 'components/controls/CheckboxDone'
import { Priority } from './Priority'

interface Props {
  todo: Todo
  updateTodo: (todo: Todo) => void
  removeTodo: (todo: Todo) => void
}

export const TodoItem = ({ todo, updateTodo, removeTodo }: Props) => {
  return (
    <div className="todo-item">
      <CheckboxDone todo={todo} updateTodo={updateTodo} />
      "--PRI: "<Priority todo={todo} updateTodo={updateTodo}></Priority>
      "--ID: "<span>{todo.id}</span>
      "--Text: "<span>{todo.text}</span>
      "--Done: "<span>{String(todo.done)}</span>
      "--Importance: "<span>{todo.importance}</span>
      "--"
      <Button onClick={() => removeTodo(todo)} buttonType="remove">
        Remove
      </Button>
    </div>
  )
}

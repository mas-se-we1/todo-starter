import { parseImportance } from 'models/Importance'
import { Todo } from 'models/Todo'
import { useState } from 'react'
import './Flash.css'

interface Props {
  id: number
  todo: Todo
  updateTodo: (todo: Todo) => void
}

export const Flash = ({ id, todo, updateTodo }: Props) => {
  const [checked, setChecked] = useState<boolean>(id <= todo.importance)

  const change = () => {
    if (checked) {
      updateTodo({ ...todo, importance: parseImportance(id) })
    } else {
      updateTodo({ ...todo, importance: parseImportance(id - 1) })
    }
    setChecked(!checked)
  }

  return (
    <span
      className={`flash${id <= todo.importance ? ' checked' : ''}`}
      onClick={change}
    >
      &#8623;
    </span>
  )
}

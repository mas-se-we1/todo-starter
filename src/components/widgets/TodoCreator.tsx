import { Button } from 'components/controls/Button'
import { CheckboxFilter } from 'components/controls/CheckboxFilter'
import { Input } from 'components/controls/Input'
import { createTodo, Todo } from 'models/Todo'
import './TodoCreator.css'
import { KeyboardEvent } from 'react'

interface Props {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  input: string
  setInput: (text: string) => void
  showAll: boolean
  setShowAll: (state: boolean) => void
}

export const TodoCreator = ({
  todos,
  addTodo,
  input,
  setInput,
  showAll,
  setShowAll,
}: Props) => {
  const createAndAddTodo = () => {
    if (input === '') return
    addTodo(createTodo(input))
    setInput('')
  }

  const handleKeyboardEvent = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      createAndAddTodo()
    }
  }

  return (
    <div className="todo-creator" onKeyDown={handleKeyboardEvent}>
      <Input input={input} setInput={setInput}></Input>
      <Button onClick={createAndAddTodo} buttonType="add">
        Add
      </Button>
      <CheckboxFilter showAll={showAll} setShowAll={setShowAll} />
    </div>
  )
}

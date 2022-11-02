import './App.css'

import { AppBar } from '../widgets/AppBar'
import { TodoCreator } from '../widgets/TodoCreator'
import { TodoList } from '../widgets/TodoList'
import { Footer } from '../widgets/Footer'

import { Todo } from '../../models/Todo'
import { useState } from 'react'

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Hello', done: false, importance: 2 },
    { id: '2', text: 'World', done: false, importance: 1 },
  ])
  const [input, setInput] = useState<string>('')
  const [showAll, setShowAll] = useState<boolean>(false)

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (todo: Todo) => {
    setTodos(todos.filter(current => current.id !== todo.id))
  }

  const updateTodo = (todo: Todo) => {
    setTodos(
      todos.map(current => {
        if (current.id === todo.id) {
          return { ...todo }
        }
        return current
      })
    )
  }

  // TODO: sort just according to importance
  const sortTodoAscending = () => {
    let sortedTodosAscending = [...todos].sort(
      (a, b) => a.importance - b.importance
    )

    setTodos(sortedTodosAscending)
  }

  // TODO: sort just according to importance
  const sortTodoDescending = () => {
    let sortedTodosAscending = [...todos].sort(
      (a, b) => b.importance - a.importance
    )

    setTodos(sortedTodosAscending)
  }

  return (
    <div className="app">
      <AppBar />
      <div className="content">
        <TodoCreator
          todos={todos}
          addTodo={addTodo}
          input={input}
          setInput={setInput}
          showAll={showAll}
          setShowAll={setShowAll}
          sortAscending={sortTodoAscending}
          sortDescending={sortTodoDescending}
        />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          input={input}
          showAll={showAll}
        />
      </div>
      <Footer />
    </div>
  )
}

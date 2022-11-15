import { PlusCircle } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import styles from './App.module.css'

import logo from './assets/logo.svg'
import { Counter } from './components/counter/Counter'
import { TodoList } from './components/todo-list/TodoList'

interface Todo {
  id: number
  text: string
  done: boolean
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')
  const newTodoInputRef = useRef<HTMLInputElement>(null)

  const countTodos = todos.length
  const countDone = todos.filter((todo) => todo.done).length

  useEffect(() => { 
    setTodos([
      { id: 1, text: 'Learn React', done: false },
      { id: 2, text: 'Learn TypeScript', done: false },
      { id: 3, text: 'Learn Phosphor', done: false },
    ])
  }, [])

  function handleAdd() {
    newTodoInputRef.current?.focus()
    if (newTodo.trim() === '') {
      return
    }
    setTodos([...todos, { id: todos.length + 1, text: newTodo, done: false }])
    setNewTodo('')
  }

  function handleRemove(id: number) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function handleNewTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value)
  }

  function handleCheck(id: number) {
    const todo = todos.find(todo => todo.id === id)
    if (todo) {
      todo.done = !todo.done
      setTodos([...todos])
    }
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <input 
              type="text"
              ref={newTodoInputRef}
              placeholder="Adicione uma nova tarefa"
              value={newTodo}
              onChange={handleNewTodoChange}
              autoFocus
            />
            <button onClick={handleAdd}>Criar <PlusCircle size={16}/></button>
          </div>
          <div className={styles.listContainer}>
            <header>
              <p className={styles.numberTodosCreated}>Tarefas criadas <Counter total={countTodos} /></p>
              <p className={styles.numberTodosDone}>Concluídas <Counter total={countTodos} count={countDone} /></p>
            </header>
            <TodoList todos={todos} onRemove={handleRemove} onCheck={handleCheck} />
          </div>
        </div>
      </main>
    </div>
  )
}

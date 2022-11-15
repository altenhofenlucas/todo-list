import { Todo, TodoItem } from './item/TodoItem'

import styles from './TodoList.module.css'

interface TodoListProps {
  todos: Todo[]
  onRemove: (id: number) => void
  onCheck: (id: number) => void
}

export function TodoList({ todos = [], onRemove, onCheck }: TodoListProps) {
  return (
    <ul className={styles.todoList}>
      {
        todos
          .filter(todo => !todo.done)
          .map(todo => (
            <TodoItem
              todo={todo}
              onCheck={onCheck}
              onRemove={onRemove} 
            />
          )
        )
      }
      {
        todos
          .filter(todo => todo.done)
          .map(todo => (
            <TodoItem
              todo={todo}
              onCheck={onCheck}
              onRemove={onRemove} 
            />
          )
        )
      }
    </ul>
  )
}

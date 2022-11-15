import { Trash } from 'phosphor-react';

import styles from './TodoItem.module.css'

interface TodoItemProps {
  todo: Todo;
  onRemove: (id: number) => void;
  onCheck: (id: number) => void;
}

export interface Todo {
  id: number
  text: string
  done: boolean
}

export function TodoItem({ todo, onRemove, onCheck }: TodoItemProps) {
  return (
    <li className={styles.todoItem} key={todo.id}>
      <div className={styles.roundedCheckbox}>
        <input 
          type="checkbox"
          id={`${todo.id}`}
          onClick={() => onCheck(todo.id)}
          checked={todo.done} 
        />
        <label htmlFor={`${todo.id}`} />
      </div>
      <p className={todo.done ? styles.todoDoneText : ''}>
        {todo.text}
      </p>
      <button 
        className={styles.removeTodoButton}
        onClick={() => onRemove(todo.id)}>
          <Trash />
      </button>
    </li>
  )
}

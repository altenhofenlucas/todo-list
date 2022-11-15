import styles from './Counter.module.css'

interface CounterProps {
  count?: number;
  total: number;
}

export function Counter({ count, total }: CounterProps) {
  return (
    <div className={styles.counter}>
      <span>{ count != undefined ? `${count} de ` : ''}{total}</span>
    </div>
  )
}
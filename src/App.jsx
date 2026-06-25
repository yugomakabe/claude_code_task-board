import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    const text = inputValue.trim()
    if (!text) return
    setTasks([...tasks, { id: Date.now(), text, done: false }])
    setInputValue('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="container">
      <h1>タスクボード</h1>

      <div className="input-row">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="タスクを入力してください"
        />
        <button onClick={addTask}>追加</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item${task.done ? ' done' : ''}`}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              削除
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty">タスクがありません</p>
      )}
    </div>
  )
}

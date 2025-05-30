import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import awake from '../assets/awake.png'

const defaultTasks = [
  { name: 'Acordar antes das 10h', value: 2.00, icon: awake },
]

function TaskList({ onAddToBalance }) {
  const [tasks, setTasks] = useState(defaultTasks)
  const [counts, setCounts] = useState(Array(defaultTasks.length).fill(0))

  const handleClick = (index) => {
    const newCounts = [...counts]
    newCounts[index]++
    setCounts(newCounts)
    onAddToBalance(tasks[index].value)
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    const newCounts = counts.filter((_, i) => i !== index)
    setTasks(newTasks)
    setCounts(newCounts)
  }

  useEffect(() => {
    const listener = (e) => {
      setTasks(prev => [...prev, { ...e.detail, icon: '' }])
      setCounts(prev => [...prev, 0])
    }
    const resetListener = () => setCounts(counts.map(() => 0))
    window.addEventListener('new-task', listener)
    window.addEventListener('reset-day', resetListener)
    return () => {
      window.removeEventListener('new-task', listener)
      window.removeEventListener('reset-day', resetListener)
    }
  }, [counts])

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: '900px'
    }}>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          name={task.name}
          value={task.value}
          icon={task.icon}
          count={counts[index]}
          onClick={() => handleClick(index)}
          onDelete={index >= defaultTasks.length ? () => handleDelete(index) : null}
        />
      ))}
    </div>
  )
}

export default TaskList
import React, { useState } from 'react'
import TaskCard from './TaskCard'
import awake from '../assets/awake.png'

const initialTasks = [
  { name: 'Acordar antes das 10h', value: 2.00, icon: awake },
]

function TaskList() {
  const [tasks, setTasks] = useState(initialTasks)
  const [counts, setCounts] = useState(Array(tasks.length).fill(0))

  const handleClick = (index) => {
    const newCounts = [...counts]
    newCounts[index]++
    setCounts(newCounts)
  }

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
        />
      ))}
    </div>
  )
}

export default TaskList
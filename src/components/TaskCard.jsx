import React from 'react'

function TaskCard({ name, value, icon, count, onClick, onDelete }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '200px',
      textAlign: 'center',
      margin: '1rem',
      backgroundColor: '#fff',
      position: 'relative'
    }}>
      <img src={icon} alt={name} style={{ width: '40px', height: '40px' }} />
      <h3>{name}</h3>
      <p>💰 R$ {value.toFixed(2)}</p>
      <p>Feita: {count}x</p>
      <button onClick={onClick}>+1</button>
      {onDelete && <button onClick={onDelete} style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        background: 'red',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '24px',
        height: '24px'
      }}>x</button>}
    </div>
  )
}

export default TaskCard
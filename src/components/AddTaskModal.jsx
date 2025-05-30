import React, { useState } from 'react'

function AddTaskModal({ onAdd, onClose }) {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && !isNaN(value)) {
      onAdd({ name, value: parseFloat(value), icon: null })
      setName('')
      setValue('')
      onClose()
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '300px'
      }}>
        <h2>Adicionar Nova Tarefa</h2>
        <input
          type="text"
          placeholder="Nome da tarefa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor em R$"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          step="0.01"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit">Adicionar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default AddTaskModal
import React, { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTaskModal from './components/AddTaskModal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [balance, setBalance] = useState(0)
  const [resetCount, setResetCount] = useState(0)

  const handleAddBalance = (amount) => {
    setBalance(prev => prev + amount)
  }

  const handleResetBalance = () => {
    setBalance(0)
  }

  const handleResetDay = () => {
    // Simples antifraude: limite de 3 resets por hora
    if (resetCount >= 3) {
      alert("Limite de reset diário atingido. Tente mais tarde.")
      return
    }
    const event = new Event('reset-day')
    window.dispatchEvent(event)
    setResetCount(c => c + 1)
  }

  return (
    <div className="app">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <button>💰 Saldo: R$ {balance.toFixed(2)}</button>
        <button onClick={handleResetBalance}>🔄 Resetar saldo</button>
        <button onClick={handleResetDay}>🕛 Resetar o dia</button>
        <button onClick={() => setShowModal(true)}>➕ Adicionar tarefa</button>
      </div>
      <TaskList onAddToBalance={handleAddBalance} />
      {showModal && <AddTaskModal onAdd={(task) => {
        const event = new CustomEvent('new-task', { detail: task })
        window.dispatchEvent(event)
      }} onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default App
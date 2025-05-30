import React from 'react'
import avatar from '../assets/avatar.png'

function Header() {
  return (
    <div style={{ marginTop: '1rem' }}>
      <img src={avatar} alt="Avatar" className="header-avatar" />
      <h1>👑 Projeto Happy Nation 👑</h1>
      <p>Para a rainha mais linda, com amor e risadas! 💖</p>
    </div>
  )
}

export default Header
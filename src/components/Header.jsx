import React from 'react'
import avatar from '../assets/avatar.png'
import background from '../assets/background.jpg'

const headerStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  padding: '2rem',
  width: '100%',
  color: '#fff',
  textAlign: 'center'
}

function Header() {
  return (
    <header style={headerStyle}>
      <img src={avatar} alt="Avatar" style={{ width: '120px', borderRadius: '50%' }} />
      <h1>👑 Projeto Happy Nation 👑</h1>
      <p>Para a rainha mais linda, com amor e risadas! 💖</p>
    </header>
  )
}

export default Header
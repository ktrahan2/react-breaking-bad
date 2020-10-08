import React from 'react'

export default function Card({ character, addToAlive }){

  const handleAliveClick = () => {
    addToAlive(character)
  }

  return (
    <div className='card'>
      <h3>{character.name}</h3>
      <button onClick={handleAliveClick}>Alive</button>
      <button>Deceased</button>
    </div>
  )
}
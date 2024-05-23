import React, { useState } from 'react'

export default function InputBar(props) {

  const {addTodo} = props
  
  const [inputValue, setInputValue] = useState('')
  const inputBar = document.querySelector('.input-bar')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAdd = () => {
    addTodo(inputValue)
    inputBar.value = ''
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') handleAdd()
  }


  return (
    <div className='input-container'>
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className='input-bar'
        type='text'
        placeholder='What needs to be done...'
      />
      <button onClick={handleAdd} className='input-button'>Add</button>
    </div>
  )
}
import React, { useState } from 'react'

export default function TodoCard(props) {

  const { text, idx, deleteTodo } = props
  const inputBar = document.querySelector('.input-bar')

  const handleDelete = () => {
    deleteTodo(idx)
  }

  const handleEdit = () => {
    deleteTodo(idx)
    inputBar.value = text
  }


  return (
    <div className='todo-card'>
        <p>{text}</p>
      <div>
          <i onClick={handleEdit} className="fa-solid fa-pen-to-square"></i>
        <i onClick={handleDelete} className="fa-solid fa-trash"></i>
      </div>
    </div>
  )
}
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import TodoCard from "./components/TodoCard";
import { useState, useEffect } from 'react'

export default function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  const addTodo = function(newTodo) {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = function(idx) {
    setTodos(todos.filter((_, index) => index !== idx))
  }

  useEffect(() => {localStorage.setItem('todos', JSON.stringify(todos))}, [todos])

  return (
    <>
      <Header />
      <InputBar addTodo = {addTodo}/>
      {todos.map((item, idx) => (<TodoCard deleteTodo = {deleteTodo} key = {idx} idx = {idx} text = {item} />))}
    </>
  )
}
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import TodoCard from "./components/TodoCard";
import { useState } from 'react'

export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = function(newTodo) {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = function(idx) {
    setTodos(todos.filter((_, index) => index !== idx))
  }

  return (
    <>
      <Header />
      <InputBar addTodo = {addTodo}/>
      {todos.map((item, idx) => (<TodoCard deleteTodo = {deleteTodo} key = {idx} idx = {idx} text = {item} />))}
    </>
  )
}
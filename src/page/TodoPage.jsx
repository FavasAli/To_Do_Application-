import React, { useEffect, useState } from "react"
import AddTodo from "../components/AddTodo"
// import ListTodo from "../components/ListTodo"
import { Col, Form, Row } from "react-bootstrap"
import {  useSelector } from "react-redux"
import AppCheckBox from "../components/AppCheckBox"
import ListTodo from "../components/ListTodo"

const TodoPage = () => {

  const todo = useSelector((state) => state.addedTodo)

    console.log("after delete",todo)
  console.log("firstssd", todo)
  const [todoList, setTodoList] = useState([])
  console.log(todoList, "todoList")

  useEffect(() => {
      setTodoList(todo)
    
  }, [todo])

  console.log("toddos----", todo)

  return (
    <>
  
          <AddTodo />
            <ListTodo todoList={todoList}   />
     
    </>
  )
}

export default TodoPage

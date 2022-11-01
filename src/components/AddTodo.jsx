import React, { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { storeTodo } from "../actions/todoActions"
import "./addSectionStyle.css"

const AddTodo = () => {
  const name = useSelector((state) => state.logedUser)

  const dispatch = useDispatch()

  const [item, setItem] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (item === "") {
      window.alert("Type Something .....")
    } else {
      dispatch(storeTodo(item))
    }

    setItem("")
  }
  return (
    <>
      <div className="sectoin-1">
        <h2 className="title-1">Welcome {name}!! </h2>
        <p className="para-1">Enter your task</p>
        <Form onSubmit={submitHandler}>
          <Row>
            <Col style={{ display: "flex" }}>
              <Form.Group controlId="todo">
                <Form.Control
                  className="input-1"
                  type="text"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" className="bttn-1" variant="primary">
                Add Task
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default AddTodo

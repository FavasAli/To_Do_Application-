import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import { login } from "../actions/userActions"
import { useDispatch } from "react-redux"
import './loginStyle.css'

const LoginPage = () => {
  const [name, setName] = useState("")

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (name.length == "") {
      window.alert("Enter your name")
    } else {
      dispatch(login(name))
      navigate("/home")
    }
  }

  return (
<>
      <div className="login-wrapper">
      <div className="loginPage">
        <h1 className='title'>Login</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label className='sub-t'>Enter your name</Form.Label><br/>
            <Form.Control
            className='textFeild'
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Button type="submit" className='bttn' variant="primary">
            Continue
          </Button>
        </Form>
      </div>
      </div>
</>
  )
}

export default LoginPage

import React from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../actions/todoActions"
import AppCheckBox from "./AppCheckBox"
import './addSectionStyle.css'

const ListTodo = ({ todoList }) => {
  const dispatch = useDispatch()
  const onDeleteHandler = (e, item) => {
    dispatch(deleteTodo(item.id))
  }

  return (
    <>
      <h2 className='list-title'>To Do List</h2>
      {todoList && todoList.map((item, i) => {
          console.log(item, "item")
          return (
            <>
              <Row key={i} className='list-view'>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <AppCheckBox value={item.id} />
                  <Col lg={6}>
                    <p style={{float:"left",marginLeft:"19px"}}>{item.todo}</p>
                  </Col>
                </div>
               <div>
                  <Col lg={3}>
                    <i
                      onClick={(e) => onDeleteHandler(e, item)}
                      class="fa fa-trash-o"
                      style={{
                        fontSize: "24px",
                        float: "right",
                        color: "red",
                        cursor: "pointer",
                      }}
                    />
                  </Col>
               </div>
              </Row>
              <hr style={{width:"85%"}}/>
            </>
          )
        })}
    </>
  )
}

export default ListTodo

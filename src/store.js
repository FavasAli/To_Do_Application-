import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { deleteTodo, storeTodo } from "./reducer/todoReducer"
import { storeName } from "./reducer/usreReducer"

const reducer = combineReducers({
  addedTodo:storeTodo,
  logedUser:storeName,
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  logedUser:userInfoFromStorage,
  addedTodo:[]
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store

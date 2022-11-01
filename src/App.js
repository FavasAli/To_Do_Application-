import { Container } from 'react-bootstrap'
import LoginPage from './page/LoginPage'
import TodoPage from './page/TodoPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Router>
            <Routes>
              <Route path='/' element={<LoginPage />}  />
              <Route path='/home' element={<TodoPage />}  />
            </Routes>

      </Router>
    </>
  )
}

export default App

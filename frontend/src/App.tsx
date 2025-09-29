
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'
import CategoryPage from './pages/CategoryPage'
import Registration from './pages/LoginPage'
function App() {

  return (
    <Routes>
    <Route Component={HomePage} path='/home'></Route>
    <Route Component={UploadPage} path='/upload' ></Route>
    <Route Component={CategoryPage} path='/category' />
    <Route Component={Registration} path='/login' />
    </Routes>
  )
}

export default App

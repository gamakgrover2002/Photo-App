
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'
function App() {

  return (
    <Routes>
    <Route Component={HomePage} path='/home'></Route>
    <Route Component={UploadPage} path='/upload' ></Route>
    </Routes>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NewReport from './pages/report/NewReport'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report/new" element={<NewReport />} />
    </Routes>
  )
}

export default App

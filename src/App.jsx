import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/Landing'
import Documentation from './Pages/Documentation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/docs" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

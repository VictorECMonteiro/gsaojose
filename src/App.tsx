import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router";
import './App.css'
import Landing from './pages/Landing/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

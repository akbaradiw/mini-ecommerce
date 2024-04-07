import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './Pages/Test.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

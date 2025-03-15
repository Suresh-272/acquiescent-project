"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import RegistrationPopup from "./components/RegistrationPopup"
import "./App.css"

function App() {
  const [showRegistration, setShowRegistration] = useState(false)

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration)
  }

  return (
    <Router>
      <div className="app">
        <Navbar toggleRegistration={toggleRegistration} />
        <Routes>
          <Route path="/" element={<Home toggleRegistration={toggleRegistration} />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses toggleRegistration={toggleRegistration} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        {showRegistration && <RegistrationPopup onClose={toggleRegistration} />}
      </div>
    </Router>
  )
}

export default App


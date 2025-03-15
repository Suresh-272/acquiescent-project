import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = ({ toggleRegistration }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=50&fit=crop&crop=edges"
              alt="Company Logo"
            />
          </Link>
        </div>

        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
                Courses
              </Link>
              <div className="dropdown-content">
                <Link to="/courses/java">Java</Link>
                <Link to="/courses/software-testing">Software Testing</Link>
                <Link to="/courses/devops">DevOps</Link>
                <Link to="/courses/python">Python</Link>
                <Link to="/courses/data-science">Data Science</Link>
                <Link to="/courses/salesforce">Salesforce</Link>
              </div>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-buttons">
          <button className="btn" onClick={toggleRegistration}>
            Enroll Now
          </button>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar


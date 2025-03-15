import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start learning today</h2>
            <div className="cta-buttons">
              <Link to="/courses" className="btn">
                View All Courses
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=50&fit=crop&crop=edges"
                  alt="Company Logo"
                />
              </div>
              <p>
                We are a leading training and consulting company providing expert guidance in various technologies to
                help professionals advance their careers.
              </p>
              <Link to="/contact" className="contact-btn">
                Contact With Us
              </Link>
            </div>

            <div className="footer-links">
              <h3>Our Courses</h3>
              <ul>
                <li>
                  <Link to="/courses/java">Java</Link>
                </li>
                <li>
                  <Link to="/courses/software-testing">Software Testing</Link>
                </li>
                <li>
                  <Link to="/courses/apache-kafka">Apache Kafka</Link>
                </li>
                <li>
                  <Link to="/courses/devops">DevOps</Link>
                </li>
                <li>
                  <Link to="/courses/salesforce">Salesforce</Link>
                </li>
                <li>
                  <Link to="/courses/python">Python</Link>
                </li>
                <li>
                  <Link to="/courses/power-bi">Power BI</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/courses">All Courses</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/terms">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Get Contact</h3>
              <ul>
                <li>
                  <span>Phone:</span>
                  <a href="tel:+919177089287">+91 91770 89287</a> /<a href="tel:+919059318889">+91 90593 18889</a>
                </li>
                <li>
                  <span>E-mail:</span>
                  <a href="mailto:info@company.com">info@company.com</a>
                </li>
                <li>
                  <span>Location:</span>
                  <a href="https://goo.gl/maps/1234" target="_blank" rel="noopener noreferrer">
                    Plot No. 26, Ground Floor, Tech Park, Business District, City - 500032
                  </a>
                </li>
              </ul>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


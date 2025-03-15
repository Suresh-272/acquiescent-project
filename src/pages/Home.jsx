"use client"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = ({ toggleRegistration }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1920&h=1080"
            alt="Corporate Background"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Empowering Your Future with Knowledge</h1>
            <p>
              Unlock endless possibilities with our industry-leading training programs and expert consulting services
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={toggleRegistration}>
                Enroll Now
              </button>
              <Link to="/courses" className="btn btn-outline">
                Explore Courses
              </Link>
            </div>
            <div className="trusted-by">
              <p>Trusted by leading companies worldwide</p>
              <div className="company-logos">
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop&crop=edges"
                  alt="Company 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop&crop=edges"
                  alt="Company 2"
                />
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop&crop=edges"
                  alt="Company 3"
                />
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop&crop=edges"
                  alt="Company 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section courses-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Featured Courses</h2>
            <p>Explore our industry-relevant courses designed to help you advance your career</p>
          </div>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
                  alt="Java Course"
                />
              </div>
              <div className="course-content">
                <h3>Java Development</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">(42 Reviews)</span>
                </div>
                <p>Master Java programming from basics to advanced concepts with real-world projects</p>
                <button className="btn" onClick={toggleRegistration}>
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
                  alt="Software Testing"
                />
              </div>
              <div className="course-content">
                <h3>Software Testing</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">(38 Reviews)</span>
                </div>
                <p>Learn manual and automation testing with industry-standard tools and frameworks</p>
                <button className="btn" onClick={toggleRegistration}>
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&h=300&fit=crop"
                  alt="DevOps"
                />
              </div>
              <div className="course-content">
                <h3>DevOps Engineering</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">(29 Reviews)</span>
                </div>
                <p>Master CI/CD pipelines, containerization, and cloud infrastructure automation</p>
                <button className="btn" onClick={toggleRegistration}>
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop"
                  alt="Data Science"
                />
              </div>
              <div className="course-content">
                <h3>Data Science</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">(35 Reviews)</span>
                </div>
                <p>Learn data analysis, machine learning, and visualization with Python and R</p>
                <button className="btn" onClick={toggleRegistration}>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="view-all">
            <Link to="/courses" className="btn btn-outline">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop"
                alt="About Us"
              />
            </div>
            <div className="about-content">
              <div className="section-title text-left">
                <h2>Why Choose Us?</h2>
                <p>We are committed to providing the highest quality training and consulting services</p>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Expert Instructors</h3>
                    <p>Learn from industry professionals with years of real-world experience</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Hands-on Learning</h3>
                    <p>Gain practical skills through project-based learning and real-world scenarios</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Industry Recognized</h3>
                    <p>Earn certificates that are valued by top employers worldwide</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Dedicated Support</h3>
                    <p>Get personalized guidance and support throughout your learning journey</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Students Say</h2>
            <p>Hear from our successful graduates who have transformed their careers</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The training was exceptional! The structured curriculum and hands-on approach helped me build
                  real-world skills that I now apply daily in my career."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Anjali Verma"
                />
                <div className="author-info">
                  <h4>Anjali Verma</h4>
                  <p>Project Manager @ TechNova Solutions</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "An outstanding learning experience! The well-structured course material and real-world projects made
                  it easy to grasp even the most complex concepts."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Vikram Sharma"
                />
                <div className="author-info">
                  <h4>Vikram Sharma</h4>
                  <p>Marketing Head @ Digital Elevate</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The live classes were engaging, and the mentors were incredibly supportive. I gained in-depth
                  knowledge that has significantly boosted my confidence."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
                  alt="Pooja Iyer"
                />
                <div className="author-info">
                  <h4>Pooja Iyer</h4>
                  <p>UI/UX Designer @ PixelCraft Studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-content">
              <div className="section-title text-left">
                <h2>Want to stay informed about new courses?</h2>
                <p>
                  Subscribe to our newsletter to receive updates on new courses, special offers, and industry insights
                </p>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" required />
                </div>
                <button type="submit" className="btn">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


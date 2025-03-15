import "./About.css"

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Empowering professionals through knowledge and expertise</p>
        </div>
      </div>

      <section className="section about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, our company has grown from a small training center to a leading provider of IT
                education and consulting services. We started with a simple mission: to bridge the gap between
                theoretical knowledge and practical application in the technology industry.
              </p>
              <p>
                Over the years, we've helped thousands of professionals advance their careers through our comprehensive
                training programs and expert consulting services. Our commitment to excellence and innovation has made
                us a trusted partner for individuals and organizations seeking to thrive in the digital age.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                  <h3>15,000+</h3>
                  <p>Students Trained</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Corporate Clients</p>
                </div>
                <div className="stat-item">
                  <h3>98%</h3>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="about-intro-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
                alt="Our Team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-mission bg-light">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower individuals and organizations with the knowledge and skills needed to excel in the rapidly
                evolving technology landscape through high-quality training and expert consulting services.
              </p>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the global leader in technology education and consulting, recognized for our innovative approach,
                excellence in delivery, and the success of our students and clients.
              </p>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>Our Values</h3>
              <p>
                Excellence, Innovation, Integrity, Student Success, and Continuous Improvement form the foundation of
                everything we do, guiding our decisions and actions every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-team">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Leadership Team</h2>
            <p>The experienced professionals guiding our organization</p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                  alt="John Doe"
                />
              </div>
              <div className="member-info">
                <h3>John Doe</h3>
                <p className="member-position">CEO & Founder</p>
                <p className="member-bio">
                  With over 20 years of experience in the IT industry, John leads our company with a vision for
                  innovation and excellence.
                </p>
                <div className="member-social">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop"
                  alt="Jane Smith"
                />
              </div>
              <div className="member-info">
                <h3>Jane Smith</h3>
                <p className="member-position">Chief Training Officer</p>
                <p className="member-bio">
                  Jane oversees our training programs, ensuring they meet the highest standards of quality and relevance
                  to industry needs.
                </p>
                <div className="member-social">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                  alt="Robert Johnson"
                />
              </div>
              <div className="member-info">
                <h3>Robert Johnson</h3>
                <p className="member-position">Head of Consulting</p>
                <p className="member-bio">
                  Robert leads our consulting division, bringing strategic insights and technical expertise to our
                  corporate clients.
                </p>
                <div className="member-social">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
                  alt="Sarah Chen"
                />
              </div>
              <div className="member-info">
                <h3>Sarah Chen</h3>
                <p className="member-position">Director of Technology</p>
                <p className="member-bio">
                  Sarah ensures our training content and methodologies stay at the cutting edge of technological
                  advancements.
                </p>
                <div className="member-social">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-clients bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Trusted by Leading Companies</h2>
            <p>Our corporate clients across various industries</p>
          </div>

          <div className="clients-grid">
            <div className="client-logo">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=edges"
                alt="Client 1"
              />
            </div>
            <div className="client-logo">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=edges"
                alt="Client 2"
              />
            </div>
            <div className="client-logo">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=edges"
                alt="Client 3"
              />
            </div>
            <div className="client-logo">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=edges"
                alt="Client 4"
              />
            </div>
            <div className="client-logo">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=edges"
                alt="Client 5"
              />
            </div>
            <div className="client-logo">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=edges"
                alt="Client 6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to advance your career?</h2>
            <p>Explore our courses and take the first step towards your professional growth</p>
            <a href="/courses" className="btn">
              View Our Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

